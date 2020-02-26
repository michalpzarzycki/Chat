import React from 'react'
import styles from './ConversationItem.module.css'

function ConversationItem() {

    return (
        <div className={styles.mainDiv}>
            <div className={styles.conversationPhoto}>
                <img alt="user photo" src="https://gfx.radiozet.pl/var/radiozet/storage/images/muzyka/selena-gomez-trafila-do-szpitala-przeszla-zalamanie-nerwowe/796391-1-pol-PL/Selena-Gomez-w-szpitalu.-Przeszla-zalamanie-nerwowe_article.jpg" />
            </div>
            <div className={styles.conversationInfo}>
                <div className={styles.nameAndDate}>
                    <div style={{fontWeight:'bold', fontSize:"70%", width:"90%"}}>USER NAME</div>
                    <div className={styles.date}>
                        <div>DATE</div>
                    </div>
                </div>
                <div className={styles.description}>
                    <div>Description</div>
                </div>
            </div>
        </div>
    )
}


export default ConversationItem