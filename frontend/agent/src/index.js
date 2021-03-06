/**
 * Created by sunzhilei on 2016/1/7.
 */

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../../../frontend/agent/css/index.css"

import NavComponent from '../../../frontend/public/lib/Nav';
import CarouselComponent from '../../../frontend/public/lib/Carousel/Carousel';
import MarketingComponent from '../../../frontend/public/lib/Marketing';
import FeaturetteComponent from '../../../frontend/public/lib/Featurette';
import FooterComponent from '../../../frontend/public/lib/Footer';

let NavData = {
    brand: {text: '微客', href: '/'},
    items: {
        right: [
            {text: '首页', href: '#home', active: true},
            {text: '产品', href: '#product'},
            {text: '团队', href: '#about'},
            {text: '管理', href: '/admin'}
        ]
    }
}

let CarouselData = [
    {title: '技术驱动', text: '互联网产品设计思想满足当下需求，互联网前沿技术成就非凡体验！', active: true, btn: {text: '了解更多', href: '/'}},
    {title: '任性偏执', text: '细节成就完美，兴趣成就梦想，偏执成就价值观！', btn: {text: '了解更多', href: '/'}},
    {title: '服务宗旨', text: '市场为王，设计可以提高用户体验，技术可以助力企业增值！', btn: {text: '了解更多', href: '/'}}
]

let MarketingData = [
    {
        pic: '../../../frontend/agent/img/technology.jpg',
        title: '技术驱动',
        text: '互联网产品设计思想满足当下需求，互联网前沿技术成就非凡体验！',
        active: true,
        btn: {text: '了解更多', href: '/'}
    },
    {
        pic: '../../../frontend/agent/img/paranoid.jpg',
        title: '任性偏执',
        text: '细节成就完美，兴趣成就梦想，偏执成就价值观！',
        btn: {text: '了解更多', href: '/'}
    },
    {
        pic: '../../../frontend/agent/img/service.jpg',
        title: '服务宗旨',
        text: '市场为王，设计可以提高用户体验，技术可以助力企业增值！',
        btn: {text: '了解更多', href: '/'}
    },
]

let FeaturetteData = [
    {title: '网上商店', subtitle: '正常营业', text: '支持线上自助选购， 线上和线下支付， 配送货物， 完成交易'},
    {title: '移动官网', subtitle: '正常营业', text: '支持PC、移动响应式网站， 个性定制， 运营运维服务'},
]

class AgentIndex extends React.Component {
    render() {
        return (
            <div>
                <NavComponent data={NavData}/>
                <div id="home" className="body">
                    <CarouselComponent data={CarouselData}/>
                    <div className="container marketing">
                        <MarketingComponent data={MarketingData}/>
                        <FeaturetteComponent data={FeaturetteData}/>
                        <FooterComponent text="2016 微客, Inc."/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AgentIndex/>, document.getElementById('content'));
