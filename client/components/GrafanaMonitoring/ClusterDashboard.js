/**
 * ************************************
 *
 * @module  ClusterDashboard.js
 * @author team Kubermetrics
 * @date
 * @description Create iframe to connect to grafana instance
 *
 * ************************************
 */
import React from 'react'


class ClusterDashboard extends React.Component {
  render() {
      //suppose user is received from props
      const { user } = this.props
      return (

            <iframe
            width="97%"
            height="1150px"
            src={"http://localhost:3000/goto/tJaUhdH7z?orgId=1"}
            />
      )
  }
}
export default ClusterDashboard;