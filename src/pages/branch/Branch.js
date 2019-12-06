import React from "react";
import FlexView from 'react-flexview';

class Branch extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false,
            modalType : '',
            branchCheck : '',
            selectedBranch : null
        }

    }

    componentDidMount(){

    }
    componentWillUnmount() {


    }



    render() {

        return (
            <FlexView>
                branch
            </FlexView>

        )

    }

}

export default Branch;