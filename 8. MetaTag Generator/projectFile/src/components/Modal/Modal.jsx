import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Modal.css';

function Modal({ setShowModal, title, url, description, keywords, banner, author, language, contentType, revisit }) {
    const copyMetaTags = () => {
        const metaTags = document.getElementById('meta-tags');
        navigator.clipboard.writeText(metaTags.innerText);
        toast('Successfully copied!');
    };

    return (
        <div className="modal">
            <ToastContainer />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModal(false)} className="background"></motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="content">
                <div className="logo">
                    ./<span>meta-tag-generator</span>
                </div>

                <div onClick={() => setShowModal(false)} className="close">
                    X
                </div>

                <div className="alert">
                    <div className="icon">
                        <svg width="22" height="19" viewBox="0 0 22 19" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(1)" fill="none" fillRule="evenodd">
                                <path d="M.838 16.51L9.253 1.55a1 1 0 0 1 1.744 0l8.415 14.96A1 1 0 0 1 18.54 18H1.71a1 1 0 0 1-.872-1.49z" stroke="#18283E" strokeWidth="2"></path>
                                <path d="M10 7v5" stroke="#18283E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle fill="#18283E" cx="10" cy="15" r="1"></circle>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <span className="text">Warning:</span> Be sure to upload your image to your CMS or host.
                    </div>
                </div>

                <div className="code">
                    <div className="code-content">
                        <pre>
                            <code id="meta-tags" className="meta-tags">
                                <span className="comment">{`<!-- Primary Meta Tags -->`}</span>
                                <span>
                                    <b className="normal">{`<title>`}</b>
                                    {title}
                                    <b className="normal">{`</title>`}</b>
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` name="title" content="${title}">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` name="description" content="${description}">`}
                                </span>
                                <br />
                                <span className="comment">{`<!-- Open Graph / Facebook -->`}</span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` property="og:type" content="website">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` property="og:url" content="${url}">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` property="og:title" content="${title}">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` property="og:description" content="${description}"`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` property="og:image" content="${banner}">`}
                                </span>
                                <br />
                                <span className="comment">{`<!-- Twitter -->`}</span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` property="twitter:card" content="summary_large_image">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` property="twitter:url" content="${url}">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` property="twitter:title" content="${title}">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` property="twitter:description" content="${description}">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` property="twitter:image" content="${banner}">`}
                                </span>
                                <br />
                                <span className="comment">{`<!-- Optional Meta Tags -->`}</span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` name="keywords" content="${keywords}">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` name="robots" content="index, follow">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` http-equiv="Content-Type" content="text/html; charset="${contentType}">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` name="language" content="${language}">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` name="revisit-after" content="${revisit}">`}
                                </span>
                                <span className="normal">
                                    <b className="normal">{`<meta`}</b>
                                    {` name="author" content="${author}">`}
                                </span>
                            </code>
                        </pre>
                    </div>
                    <div className="copy-section">
                        <div className="info">
                            Copy the code into your website <span>{'<head>'}</span>
                        </div>
                        <div className="copy">
                            <button onClick={copyMetaTags}>
                                <svg height="16" viewBox="0 0 1792 1792" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" />
                                </svg>
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Modal;
