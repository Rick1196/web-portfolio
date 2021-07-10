import Image from 'next/image'
import nextLogo from '../../../../public/icons/next.jpg'
const ProjectsSections: React.ComponentType<Record<string, never>> = () => {
    return (
        <>
            <div className="cards-deck">
                <div className="item-card">
                    <div className="card-item-header">
                        <Image className="bordered-image" alt="header-card-project" src={nextLogo} layout="fill" />
                    </div>
                    <div className="card-item-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className="card-item-footer">
                        <button type='submit' className="submit-button">
                            View a live demo
                        </button>
                    </div>
                </div>
            </div>
        </>

    );

}

export default ProjectsSections;
