import styles from './header.module.scss';

const {
  header,
  text: headerText
} = styles;

const Header = ({ text }) => {

  return (
    <div className={header} title='header'>
      <h1 className={headerText}>{text || 'default header text!'}</h1>
    </div>
  )
}

export default Header;