import React from 'react'
import ConversationItem from './ConversationItem'
import styles from './ChatApp.module.css'

function ChatApp() {

    return (
        <div className={styles.chatContainer}>
            <div className={styles.searchContainer}>
                <input type="text" placeholder="search" />
            </div>
            <div className={styles.conversationList}>
                <ConversationItem />
                <ConversationItem />
                <ConversationItem />
                <ConversationItem />
                <ConversationItem />
                <ConversationItem />

                <ConversationItem />

                <ConversationItem />

                <ConversationItem />

                <ConversationItem />


            </div>
            <div className={styles.newMessageContainer}>

            </div>
            <div className={styles.chatTitle}>

            </div>
            <div className={styles.chatMessageList}>

            </div>
            <div className={styles.chatForm}>
                 <input type="text" placeholder="Type a message"/>
            </div>
        </div>
    )
}

export default ChatApp