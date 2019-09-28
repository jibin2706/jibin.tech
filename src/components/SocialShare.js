import React from 'react'
import PropTypes from 'prop-types'

import './socialShare.scss'

function SocialShare({ slug, title, body, hashtags, showHeader }) {
  const url = `https://blog.jibin.tech/${slug}`
  return (
    <section className="share-post">
      {showHeader && (
        <p className="share-post__header">
          Liked the article? Share it with your friends. I highly apperciate it
          :)
        </p>
      )}
      <div className="share-post__buttons">
        <a
          className="btn btn-twitter"
          href={`https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=${hashtags}`}
          target="_blank"
        >
          <Twitter />
        </a>
        <a
          className="btn btn-facebook"
          href={`https://www.facebook.com/sharer.php?u=${url}`}
          target="_blank"
        >
          <Facebook />
        </a>
        <a
          className="btn btn-mail"
          href={`mailto:?subject=${title}&body=${body}`}
          target="_blank"
        >
          <Email />
        </a>
      </div>
    </section>
  )
}

SocialShare.defaultProps = {
  showHeader: false,
}

SocialShare.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  hashtags: PropTypes.array.isRequired,
  showHeader: PropTypes.bool,
}

const Twitter = () => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
    <title>{'Twitter icon'}</title>
    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
  </svg>
)

const Facebook = () => (
  <svg width={24} height={24} fill="currentColor">
    <title>{'Facebook icon'}</title>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z" />
  </svg>
)

const Email = () => (
  <svg width={24} height={24} fill="currentColor">
    <title>{'Email icon'}</title>
    <path d="M12 12.713L.015 3h23.971L12 12.713zm-5.425-1.822L0 5.562v12.501l6.575-7.172zm10.85 0L24 18.063V5.562l-6.575 5.329zm-1.557 1.261L12 15.287l-3.868-3.135L.022 21h23.956l-8.11-8.848z" />
  </svg>
)

export default SocialShare
