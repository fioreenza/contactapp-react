export default function ContactItem ({imgUrl, name, email}) {
    return (
        <div className="contact_item">
          <div className="contact_detail">
            <img src={imgUrl} alt={name} />
            <div className="contact_data">
              <p className="contact_name">{name}</p>
              <p className="contact_email">{email}</p>
            </div>
          </div>
          <button className="button_close">x</button>
        </div>
    );
}