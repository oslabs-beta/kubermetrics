/**
 * ************************************
 *
 * @module  PrometheusAlerts.js
 * @author team Kubermetrics
 * @date
 * @description React Component prometheus iframe
 *
 * ************************************
 */
import React from 'react'


class PrometheusAlerts extends React.Component {
  render() {
      //suppose user is received from props
      const { user } = this.props
      return (

            <iframe
            width="97%"
            height="1150px"
            src={"http://localhost:9090/alerts"}
            />
      )
  }
}
export default PrometheusAlerts