import styles from "../styles/CommunityTitle.module.scss";

const CommunityTitle = (props) => {
  const { title, subtitle } = props;
  return (
    <div className={styles["title-wrapper"]}>
      <div className={styles.first}>{title}</div>
      <div className={styles.second}>{subtitle}</div>
    </div>
  );
};

export default CommunityTitle;
