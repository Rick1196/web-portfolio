import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";
interface ContactDataI {
  title: string;
  email: string;
  message: string;
}
const ContactSection: React.ComponentType<Record<string, never>> = () => {
  const { t } = useTranslation("common");
  const [loadingForm, setLoadingForm] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactDataI>();
  const sendMail = (data: ContactDataI) => {
    setLoadingForm(true);
    console.log("Sending", data);
    fetch("/api/email-service", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      reset({ email: "", title: "", message: "" });
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
      }
      setLoadingForm(false);
    });
  };
  return (
    <>
      <div id="content-wrapper" className="content-wrapper">
        <div className="title">{t("sections.contactSection.title")}</div>
        <form className="form" onSubmit={handleSubmit(sendMail)}>
          <div className="form__group">
            <label htmlFor="message-title">
              {t("sections.contactSection.fields.title.label")}
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              id="message-title"
              name="message-title"
              placeholder={t(
                "sections.contactSection.fields.title.placeholder"
              )}
            />
          </div>
          <div className="form__group">
            <label htmlFor="email-address">
              {t("sections.contactSection.fields.email.label")}
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email-address"
              name="email-address"
              placeholder={t(
                "sections.contactSection.fields.email.placeholder"
              )}
            />
          </div>
          <div className="form__group">
            <label htmlFor="message-content">
              {t("sections.contactSection.fields.message.label")}
            </label>
            <textarea
              {...register("message", { required: true })}
              name="message-content"
              id="message-content"
              cols={30}
              rows={10}
              placeholder={t(
                "sections.contactSection.fields.message.placeholder"
              )}
            ></textarea>
          </div>
          <div className="form__footer">
            <button
              type="submit"
              className="action-button-large"
              name="send-message"
              disabled={loadingForm}
            >
              {t("sections.contactSection.sendButton")}
              {loadingForm && <div className="loading-spinner"></div>}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactSection;
