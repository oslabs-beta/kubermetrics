
/**
 * ************************************
 *
 * @module  PodDashboard.js
 * @author team Kubermetrics
 * @date
 * @description Custom Dashboard from Grafana
 *
 * ************************************
 */
import React from 'react';


class PodDashboard extends React.Component {
  render() {
      return (
          <div className='podsDashboard'>
            <div>
            <iframe
            width="100%"
            height="100%"
            src={"http://localhost:3000/d-solo/AAOMjeHmk/kubernetes-pod-monitoring?orgId=1&refresh=10s&from=1632155279207&to=1632158879207&panelId=3"}
            />
            <iframe
            width="30%"
            height="30%"
            src={"http://localhost:3000/d-solo/AAOMjeHmk/kubernetes-pod-monitoring?orgId=1&refresh=10s&from=1632156042391&to=1632159642391&panelId=2"}
            />
            </div>
            <div>
            <iframe
            width="30%"
            height="30%"
            src={"http://localhost:3000/d-solo/AAOMjeHmk/kubernetes-pod-monitoring?orgId=1&refresh=10s&from=1632156127873&to=1632159727873&panelId=8"}
            />
            </div>
          </div>

      )
  }
}



export default PodDashboard