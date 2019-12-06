import React from "react";
import FlexView from "react-flexview";


class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount(){

    }
    componentWillUnmount() {

    }

    render(){

        return (
            <div className="theme-body">
                <main className="theme-contents contents-mt">
                    <FlexView column={true}>
                        Welcome to T# Admin
                    </FlexView>
                </main>
            </div>
        )
    }
}


export default Dashboard;