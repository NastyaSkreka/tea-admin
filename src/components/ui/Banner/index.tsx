import {BannerWrapper, BannerContainer,  BannerText, BannerImage} from './styles'
import image from '../../../images/image1.png'
import { TEA_SHOP_URL } from '../../../constants/url.constants';

export default function Banner() {
    return (
        <BannerWrapper onClick={() => window.location.replace(TEA_SHOP_URL)}>
        <BannerContainer>
        <BannerImage src={image} alt="banner" />
            <BannerText>
                Unique collection Tea
            </BannerText>
        </BannerContainer>
       </BannerWrapper>
    )
}