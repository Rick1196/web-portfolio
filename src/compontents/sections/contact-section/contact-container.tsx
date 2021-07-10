import { useState } from "react";
import { useForm } from "react-hook-form";
interface ContactDataI { title: string, email: string, message: string };
const ContactSection: React.ComponentType<Record<string, never>> = () => {
    const [loadingForm, setLoadingForm] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactDataI>();
    const sendMail = (data: ContactDataI) => {
        setLoadingForm(true);
        console.log('Sending', data);
        fetch('/api/email-service', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            reset({ email: '', title: '', message: '' });
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
            }
            setLoadingForm(false);
        })
    }
    return (
        <>
            <div className="contact-container">
                <div className="contact-card">
                    <div className="contact-title">Contact Me</div>
                    <form className="contact-form" onSubmit={handleSubmit(sendMail)}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input  {...register("title", { required: true })} type="text" id="title" name="title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Your email address</label>
                            <input {...register("email", { required: true })} type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Message">Message</label>
                            <textarea {...register("message", { required: true })} name="message" id="message" cols={30} rows={10}></textarea>
                        </div>
                        <div className="form-footer">
                            <button type='submit' className="submit-button" disabled={loadingForm}>
                                Send
                                {(loadingForm) && <div className="loading-spinner"></div>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );

}

export default ContactSection;
