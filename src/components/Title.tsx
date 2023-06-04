import { Props } from "@/models/Interfaces";
import styles from "@/styles/Title.module.scss";

const CommunityTitle = (props: Props) => {
  const { title, subtitle } = props;
  return (
    <div className={styles["title-wrapper"]}>
      <div className={styles.first}>{title}</div>
      <div className={styles.second}>{subtitle}</div>
    </div>
  );
};

export default CommunityTitle;