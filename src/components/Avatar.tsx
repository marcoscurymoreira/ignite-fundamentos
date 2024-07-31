import styles from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean
  src: string
  alt?: string
}


export function Avatar({hasBorder = true, src}: AvatarProps) {

  const border = hasBorder ? styles.avatarWithBorder : styles.avatar
  return (
    <img
      className={border}
      src={src}
    />
  );
}