import styles from './footer.module.scss';

const {
  footer,
  text: footerText
} = styles;

const Footer = ({ text }) => {
  return (
    <div className={footer} title='footer'>
      <h1 className={footerText}>{text || 'default footer text!'}</h1>
    </div>
  )
}

export default Footer;