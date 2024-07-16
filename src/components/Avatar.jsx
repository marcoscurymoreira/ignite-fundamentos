import styles from './Avatar.module.css'


export function Avatar({hasBorder = true, src}) {

  const border = hasBorder ? styles.avatarWithBorder : styles.avatar
  return (
    <img
      className={border}
      src={src}
    />
  );
}