import React from 'react'
import './contact.css'
import { LinkedinOutlined, GithubOutlined, MailOutlined, InstagramOutlined, FacebookOutlined , RedditOutlined, BookOutlined} from '@ant-design/icons'

const contact = () => {
    return (
        <div className="contact-main">
            <h1>Contacts</h1>
            <div className="contacts-section">
                <a><LinkedinOutlined className="contact-logo"/></a>
                <a><GithubOutlined className="contact-logo"/></a>
                <a><MailOutlined className="contact-logo"/></a>
                <a> <InstagramOutlined className="contact-logo"/></a>
                <a><FacebookOutlined className="contact-logo"/></a>
                <a><RedditOutlined className="contact-logo"/></a>
                <a><BookOutlined className="contact-logo"/></a>
            </div>
        </div>
    )
}

export default contact
