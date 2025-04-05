import React, { useState, useEffect } from 'react'
import styles from './chat.module.css'
import { Menu, X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react'

const Chat = () => {
  const [leftCollapsed, setLeftCollapsed] = useState(false)
  const [rightCollapsed, setRightCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const toggleLeft = () => setLeftCollapsed(!leftCollapsed)
  const toggleRight = () => setRightCollapsed(!rightCollapsed)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.container}>
      
      {/* Left Sidebar */}
      <div className={`${styles.sidebar} ${leftCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.sidebarHeader}>
          <button onClick={toggleLeft}>
            {leftCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
          {!leftCollapsed && <h3>Chat History</h3>}
        </div>
        {!leftCollapsed && (
          <div className={styles.sidebarContent}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.chatItem}>
                <MessageSquare size={20} />
                <span>Conversation {i}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chat Area */}
      <div className={styles.chatArea}>
        <div className={styles.chatMessages}>
          <div className={styles.messageReceived}>Hey! How can I help you?</div>
          <div className={styles.messageSent}>What are your working hours?</div>
        </div>
        <div className={styles.chatInput}>
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className={`${styles.sidebar} ${styles.right} ${rightCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.sidebarHeader}>
          <button onClick={toggleRight}>
            {rightCollapsed ? <ChevronLeft /> : <ChevronRight />}
          </button>
          {!rightCollapsed && <h3>Suggestions</h3>}
        </div>
        {!rightCollapsed && (
          <div className={styles.sidebarContent}>
            {[
              'What are your working hours What are your working What are your working hours What are your working  ?',
              'How can I contact support?',
              'Do you offer discounts?',
              'Where are you located?'
            ].map((q, idx) => (
              <button key={idx} className={styles.suggestion}>
                {q}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Chat
