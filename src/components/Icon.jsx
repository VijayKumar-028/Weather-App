import humidityIcon from '../assets/humidity.png';
import sunriseIcon from '../assets/Sunrise.png';
import sunsetIcon from '../assets/Sunset.png';
import visibilityIcon from '../assets/visibility.png';
import windIconImg from '../assets/Wind.png'; //

const Icon = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`} />;
};

export const WindIcon = () => <Icon src={windIconImg} alt="Wind" className="animate-icon svg-hover" />;
export const HumidityIcon = () => <Icon src={humidityIcon} alt="Humidity" className="powerful-pulse svg-hover" />;
export const VisibilityIcon = () => <Icon src={visibilityIcon} alt="Visibility" className="powerful-pulse svg-hover" />;
export const SunriseIcon = () => <Icon src={sunriseIcon} alt="Sunrise" className="powerful-pulse svg-hover" />;
export const SunsetIcon = () => <Icon src={sunsetIcon} alt="Sunset" className="powerful-pulse svg-hover" />;