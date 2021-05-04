import React from "react";
import styles from "./Social.module.css";
import TwitterTimeline from "./TwitterTimeline";
import Posts from "./Posts";
import SocialHeader from "./SocialHeader";
import SocialFooter from "./SocialFooter";
import careersImageUrl from '@site/static/img/careers.jpg';

function Social({socialConfig}) {
    return (
        <section className={styles.social}>
            <div className="container">
                <div className="row">
                    <div className='col col--4'>
                        <div className={styles.socialColumn}>
                            <div className={styles.socialHeaderAndBody}>
                                <SocialHeader title={socialConfig.blog.title}/>
                                <div className={styles.socialBody}>
                                    <Posts link={socialConfig.blog.link}/>
                                </div>
                            </div>
                            <SocialFooter text={socialConfig.blog.footerText} link={socialConfig.blog.link}/>
                        </div>
                    </div>
                    <div className='col col--4'>
                        <div className={styles.socialColumn}>
                            <div className={styles.socialHeaderAndBody}>
                                <SocialHeader title={socialConfig.careers.title}/>
                                <div className={styles.socialBody}>
                                    <a href={socialConfig.careers.link} target="_blank">
                                        <img className={styles.careersImage} src={careersImageUrl} alt={socialConfig.careers.title}/>
                                    </a>
                                </div>
                            </div>
                            <SocialFooter text={socialConfig.careers.footerText} link={socialConfig.careers.link}/>
                        </div>
                    </div>
                    <div className='col col--4'>
                        <div className={styles.socialColumn}>
                            <div className={styles.socialHeaderAndBody}>
                                <SocialHeader title={socialConfig.twitter.title}/>
                                <div className={styles.socialBody}>
                                    <TwitterTimeline twitterLink={socialConfig.twitter.link}/>
                                </div>
                            </div>
                            <SocialFooter text={socialConfig.twitter.footerText} link={socialConfig.twitter.link}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social;
