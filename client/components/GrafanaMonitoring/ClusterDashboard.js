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
            width="100%"
            height="1000px"
            src={"http://localhost:3000/d/U_gA5P2mz/kubernetes-cluster-monitoring?orgId=1&refresh=10s&from=1632238987553&to=1632239887553"}
            />
      )
  }
}
export default ClusterDashboard;