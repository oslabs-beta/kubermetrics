![](https://cdn-images-1.medium.com/max/4002/1*wu68SZJTT1ONtB6k6qja8Q.jpeg)
# Kubermetrics Setup

## **What is Kubermetrics?**

Kubermetrics is an open-source dev tool that provides Kubernetes cluster monitoring as well as data visualization in a simple and easy to understand user interface. Kubermetrics intergrates both the Prometheus and Grafana Dashboards on one page! Allowing for custominzable dashboards and alerts. 

Kubermetrics Dockerhub: https://hub.docker.com/r/kubermetrics/kubermetrics
Kubermetrics Github: https://github.com/oslabs-beta/kubermetrics


In this readme we will walk you through the setup process for our app. For this setup you will need the following:

- Start by cloning our repo down to your local machine. 
- This app assumes you have direct access to your K8s Cluster from the local machine in which this app is being installed
- Kubectl - Kubernetes CLI installed
- Ports 3000, 3068, & 9090 open. (This can be changed if necessary)
- For the next steps, please refer to first section if you have prometheus and grafana installed or scroll down for full installation. 

# I Already Have Prometheus & Grafana Installed!

### Great! Here are a couple of notes on how to deploy our app and how it interacts with Prometheus & Grafana. 
- First, to install our app, in your terminal navigate to our "manifests folder"
- From this directory run the following command 
- ```kubectl apply -f kubermetrics-depl.yaml```

### You've just installed our app on your cluster! Next you will want to open a port to access Kubermetrics from your local host. 
- Next, run the following command to access all your current running pods
- ```kubectl get pods``` 

![](https://cdn-images-1.medium.com/max/2000/1*aQJSh-RCHfo8DWH-TBfkfQ.png)

- Find your current running Pod for Kubermetrics and run the following command
- ```kubectl port-forward <kubermetrics-pod-name-goes-here> 3068:3068```
- This will allow you to access our dashboard at localhost:3068
- Our app looks for grafana at localhost:3000 & promethues at local host 9090
- Please run the following commands to ensure grafana and prometheus are up and running at these ports!
- ```kubectl port-forward <grafana-pod-name-goes-here> --namespace=<yournamespace> 3000:3000```
- ```kubectl port-forward <prometheus-pod-name-goes-here> --namespace=<yournamespace> 9090:9090```
- Now Navigate to localhost:3068 & enjoy our dashboard with full promethus and grafana integration! 



# Prometheus & Grafana Not Currently Installed 
### Don't have prometheus or grafana installed? Don't worry! The process is fast and easy. 
- Open a terminal and navigate to the Kubermetrics root directory.
- Run the following command: 
```kubectl create namespace monitoring```
- This will create the K8s namespace monitoring in which we install Prometheus and Grafana.
- Next to install Kubermetrics, Prometheus & Grafana into your cluster, run the following command:
- ``` kubectl apply -f manifests```
### Great now you have everything you need installed! Now to open up some ports.
- Next Please run the following commands 
- ```kubectl get pods```
` 
![](https://cdn-images-1.medium.com/max/2000/1*aQJSh-RCHfo8DWH-TBfkfQ.png)

- Find your current running Pod for Kubermetrics and run the following command
- ```kubectl port-forward <kubermetrics-pod-name-goes-here> 3068:3068```
- This will allow you to access our dashboard at localhost:3068
- Our app looks for grafana at localhost:3000 & promethues at local host 9090
- Please run the following commands to ensure grafana and prometheus are up and running at these ports!
- ```kubectl port-forward <grafana-pod-name-goes-here> --namespace=monitoring 3000:3000```
- ```kubectl port-forward <prometheus-pod-name-goes-here> --namespace=monitoring 9090:9090```
- Now Navigate to localhost:3068 & enjoy our dashboard with full promethus and grafana integration! 


# Notes 

- Our Included Grafana yaml file includes environment variables that we use in order to load specific settings when using Grafana. Feel free to poke around or change other settings in this file and reapply!
- Current App is in Beta. Many more features are planned to be added! 
- Feel free to visit our github page @ https://github.com/oslabs-beta/kubermetrics if you have any issues!

# About the Team 

## Ahad Rajput 
- LinkedIn: https://www.linkedin.com/in/arajput96/
- Github: https://github.com/arajput96

## Dominic DiSalvo

- LinkedIn: https://www.linkedin.com/in/dominicdisalvo/
- Github: https://github.com/dominicd17

## Justin Buckner

- LinkedIn: https://www.linkedin.com/in/jbuild/
- Github: https://github.com/JWadeOn