import React from 'react';
import { connect } from 'react-redux';
import { Timeline, Row, Col } from 'antd';
class Todo_Layout extends React.Component {

    render() {
        return (
            
            <Row style={{paddingTop:10}}>
                <Col span={8}> </Col>
                <Col span={16}>
                    <Timeline>
                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="red">
                            <p>Solve initial network problems 1</p>
                            <p>Solve initial network problems 2</p>
                            <p>Solve initial network problems 3 2015-09-01</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                        </Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
        );

    }
}
const mapStateToProps = state => ({
    //todos: getVisibleTodos(state.todos, state.visibilityFilter)
    state: state
})
const mapDispatchToProps = dispatch => ({
    //toggleTodo: id => dispatch(toggleTodo(id))
    dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(Todo_Layout);
