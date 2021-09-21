import React from 'react'


class ClusterDashboard extends React.Component {
  render() {
      //suppose user is received from props
      const { user } = this.props
      return (

            <iframe
            width="100%"
            height="1000px"
            src={"https://localhost:3000"}
            />
      )
  }
}
export default ClusterDashboard