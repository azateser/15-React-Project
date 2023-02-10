import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import ContentArea from './components/ContentArea';

import './Content.css';

function Content() {
    const [showModal, setShowModal] = useState(false);

    const [title, setTitle] = useState('Meta Tag Generator — Title');
    const [url, setUrl] = useState('https://github.com/azateser');
    const [description, setDescription] = useState('With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!');
    const [keywords, setKeywords] = useState('deneme, ');
    const [banner, setBanner] = useState('./gray.jpg');
    const [author, setAuthor] = useState('Azat ESER');
    const [language, setLanguage] = useState('TR');
    const [contentType, setContentType] = useState('UTF-8');
    const [revisit, setRevisit] = useState('5 days');

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleUrlChange = (e) => setUrl(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleKeywordsChange = (e) => setKeywords(e.target.value);
    const handleBannerChange = (e) => setBanner(e.target.value);
    const handleAuthorChange = (e) => setAuthor(e.target.value);
    const handleLanguageChange = (e) => setLanguage(e.target.value);
    const handleContentTypeChange = (e) => setContentType(e.target.value);
    const handleRevisitChange = (e) => setRevisit(e.target.value);

    return (
        <div className="content">
            <AnimatePresence>{showModal && <Modal setShowModal={setShowModal} title={title} url={url} description={description} keywords={keywords} banner={banner} author={author} language={language} contentType={contentType} revisit={revisit} />}</AnimatePresence>
            <div className="info">
                <div className="title">METADATA</div>
                <div className="double">
                    <ContentArea handleChange={handleTitleChange} value={title} title="Website Name or Page Title" placeholder="Website Name or Page Title" description="counter" />
                    <ContentArea handleChange={handleUrlChange} value={url} title="Website Address (URL)" placeholder="Enter Website URL; eg: https://example.com" description="counter" />
                </div>
                <div>
                    <ContentArea handleChange={handleDescriptionChange} value={description} title="Website Description" longInput placeholder="Enter Website Meta Description" description="counter" />
                </div>
                <ContentArea handleChange={handleKeywordsChange} value={keywords} title="Website Meta Keywords" longInput placeholder="Enter Website Keywords; eg: website, keywords" description="counter" />
                <div className="double">
                    <ContentArea handleChange={handleBannerChange} value={banner} title="Website Banner (URL)" placeholder="Enter Banner URL; eg: https://example.com/logo.png" description="Recommend 1200×628" />
                    <ContentArea handleChange={handleAuthorChange} value={author} title="Website Author" placeholder="Enter Author Name; eg: Azat ESER" description="counter" />
                </div>
                <div className="double">
                    <ContentArea handleChange={handleLanguageChange} value={language} title="Website Language" placeholder="Enter Website Language; eg: en" />
                    <ContentArea handleChange={handleContentTypeChange} value={contentType} title="What type of content will your site display?" placeholder="e.g. UTF-8" />
                </div>
                <div>
                    <ContentArea handleChange={handleRevisitChange} value={revisit} title="Search engines should revisit this page after" placeholder="e.g. 5 days" />
                </div>
                <div className="generate">
                    <button onClick={() => setShowModal(true)}>
                        <svg height="20" viewBox="0 0 1792 1792" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" />
                        </svg>
                        Generate Meta Tag
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {title && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="preview">
                        <div className="title">PREVIEW</div>

                        <div className="separator">
                            <span>Google</span>
                            <hr />
                        </div>

                        <div className="google">
                            <div className="google-title">{title}</div>
                            <div className="url">
                                <span className="text">{url}</span>
                                <span>
                                    <svg fill="#006621" height="10px" width="10px" version="1.1" viewBox="0 0 386.257 386.257">
                                        <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
                                    </svg>
                                </span>
                            </div>
                            <div className="description">{description}</div>
                        </div>

                        <div className="separator">
                            <span>Facebook</span>
                            <hr />
                        </div>

                        <div className="facebook">
                            <div>
                                <img src={banner} alt="" />
                            </div>
                            <div className="facebook-content">
                                <span className="url">{url.replace('https://', '').replace('http://', '')}</span>
                                <span className="facebook-title">{title}</span>
                                <span className="description">{description.length < 50 ? description.substring(0, 50) : `${description.substring(0, 50)}...`}</span>
                            </div>
                        </div>

                        <div className="separator">
                            <span>Twitter</span>
                            <hr />
                        </div>

                        <div className="twitter">
                            <div>
                                <img className="image" src={banner} alt="" />
                            </div>
                            <div className="twitter-content">
                                <span className="twitter-title">{title}</span>
                                <span className="description">{description.length < 50 ? description.substring(0, 50) : `${description.substring(0, 50)}...`}</span>
                                <span className="url">{url.replace('https://', '').replace('http://', '')}</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Content;
