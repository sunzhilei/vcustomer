/**
 * Created by sunzhilei on 2016/1/22.
 */

class Select extends React.Component {

    constructor() {
        super();
        this.state = {
            value: 0,
            rows: []
        }
    }

    componentDidMount() {
        if (this.props.url) {
            $.get(this.props.url, {}, data => {
                this.setState({rows: data.rows});
            }, 'json');
        }
    }

    componentWillReceiveProps(new_props) {
        this.setState({value: new_props.value})
    }

    render() {
        let curr_value = this.state.value;
        return (
            <select name={this.props.name ? this.props.name : ''}
                    className="form-control"
                    onChange={e => {this.props.onChange(e)}}>
                <option value="0"> 请选择</option>
                {
                    this.state.rows.map((item, index) => {
                        let option = <option key={'select-' + index} value={item.uuid}>{item.name}</option>;
                        if (curr_value == item.uuid) {
                            option = <option key={'select-' + index} value={item.uuid} selected>{item.name}</option>;
                        }
                        return (option)
                    })
                }
            </select>
        )
    }
}

module.exports = Select;