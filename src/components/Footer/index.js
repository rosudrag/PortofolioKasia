import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={styles.footer}>
    {/* If you like Phenomic, this is a way to share the love ;) */}
    <p>
      <a href={"http://rosudrag.github.io/"} className={styles.phenomicReference}>
        {"Created by "}
        <span className={styles.phenomicReferenceName}>
          {"DRR"}
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
