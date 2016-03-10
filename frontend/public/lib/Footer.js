/**
 * Created by sunzhilei on 2016/1/22.
 */


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p className="pull-right"><a href="#">回到顶部</a></p>
                <p>&copy; {this.props.text} &middot; </p>
            </footer>
        );
    }
}

module.exports = Footer;