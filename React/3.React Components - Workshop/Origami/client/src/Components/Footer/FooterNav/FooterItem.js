import styles from './FooterItem.module.css'
const FooterItem = ({
    children
}) => {
    return (
        <li className={styles.footerListItem}>
            <a href="#" className={styles.footerListItemLink}> {children}
            </a>
        </li>
    )
}
export default FooterItem