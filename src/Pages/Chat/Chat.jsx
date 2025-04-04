import React, { useState, useEffect } from 'react'
import styles from './chat.module.css'
import {
  MessageSquare,
  Menu,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react'

const Chat = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 508)

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 508)
      if (window.innerWidth > 768) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen)
    } else {
      setCollapsed(!collapsed)
    }
  }

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''} ${
          mobileOpen ? styles.mobileOpen : ''
        }`}
      >
        <div className={styles.top}>
          <button onClick={toggleSidebar} className={styles.toggleBtn}>
            {isMobile ? <X size={20} /> : collapsed ? <ChevronRight size={40} /> : <ChevronLeft size={30} />}
          </button>
          {!collapsed && !isMobile && <h2 className={styles.logo}>Chats</h2>}
        </div>

        <div className={styles.history}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.historyItem}>
              <MessageSquare size={20} />
              {!collapsed && <span>Conversation {i + 1}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      {isMobile && (
        <div className={styles.mobileHeader}>
          <button className={styles.mobileMenuBtn} onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
          <h2>Chat</h2>
        </div>
      )}

      {/* Chat Body */}
      <div className={styles.chatArea}>
        {!isMobile && <div className={styles.chatHeader}>Chat</div>}

        <div className={styles.chatMessages}>
          <div className={`${styles.message} ${styles.received}`}>Hey there!</div>
          <div className={`${styles.message} ${styles.sent}`}>Hey! What's up?</div>
        </div>

        <div className={styles.chatInput}>
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Chat
