

## Metric Manager.

    Watson AIOps Metric Manager consumes and analyzes your metrics or time-series data and provides **early warning** of *abnormal behavior* which might indicate potential outage, service degradation, or unexpected change. 

    It uses AI to build thresholds and baselines dynamically, without the need for configuration. Therefore, you do not need to keep adjusting the baseline as you do in a traditional Performance Manager system.
    Watson AIOps Metric Manager evaluates based on normal behaviors of the data, and it can detect anomalous behavior on KPIs (Key Performance Indicator). Normal behavior is learned through an initial training period to build an analytics model and constant model retraining as new data loaded thereafter. 

    If a KPI is deemed anomalous, an event is raised.  Events can be viewed and actioned in the Watson AIOps Event Manager. If required, you can trigger the runbook automation, available in Event Manager, to resolve your potential issue even before it happens.
    In Operation, once Metric Manager continuously ingests the metric data, as an SRE you will be notified of possible unresolved issues through the consolidated alerts generated by Metric Manager. 

    Here is a diagram on Watson AIOps Metric Manager.

    <img src="./images/mm01.png" alt="Watson AIOps Metric Manager" width="800" align="center"/>
    <br>

### Lab setup.

    To start the lab, if you have not done so, access the VM image. If it has not been started, start both the `rhdesk` and `VM136_PoC_rh6_9` images.
    **Note:** You can start the VMs by clicking on the `play` icon above each image, either the play symbol at the top to start both images or upon each monitor's picture.

    <img src="./images/mm02.png" alt="Watson AIOps Lab images" width="500" align="center"/>

    Like other Watson AIOps Lab exercises, you will be working in the __rhdesk__ images.
    Once both images are running, click on the _rhdesk_ image and start your web sessions.

    The following table list the username and password for the lab exercise.

    | Component | User Name | Password |
    | --- | :---: | :---: |
    | Linux | `ibmuser` | `engageibm!` |
    | DASH | `ncoadmin` | `ncoadmin` |

    Login as `ibmuser` by clicking on the name displayed. The password is `engageibm!`.
    <br>
    <img src="./images/mm03.png" alt="Watson AIOps Lab images" width="300" align="center"/>

    **Note:** In this guide, you can always click on the diagram to see the bigger picture.

### Lab Exercises

    Watson AIOps Metric Manager learns the behavior of the metrics that it ingests. To allow you to see the results in this lab, we have replicated a selected data stream from another system and feed it to the CP4WA-Metric Manager data mediation process. The date range of the data feed is from `the 1st of April 2021 00:00 AM` to `the 25th of April 2:55 PM`. The data is coming in 5 minutes intervals. CP4WA-Metric Manager processed the data, as they come, near real-time. Therefore, the lab simulates what the user will see on __the 25th of April 2021 at 3:00 PM__.

    The data comes from a performance manager in a data center. Data includes application and infrastructure performance data.
    The data comes every 5 minutes. Metric Manager processed related data in a topic. A [reference](./ref/) section had been included to explain the term used. In this lab, the topic is **THINK21**.

    Metric Manager generates an event when it detects abnormal behavior that might indicate a potential problem.

    A typical use of Metric Manager is to observe and act on the generated events. These events can be pushed to the rest of Watson AIOps and create stories and Chatops notifications. We will be looking only at events and Metric Manager interfaces.

    We will start the first exercise by giving you an overview of the generated anomaly.

    Metric Manager performs the analysis without any user configuration.  Once you configured the mediation and started feeding data into Metric Manager, all the algorithm is performed for you automatically.  This allows us to concentrate on the output of these algorithms for these lab exercises. The Metric Manager lab exercise is grouped into Use Cases. 

    You will use the Firefox browser to perform the lab exercise. Start firefox by either clicking on the firefox icon on the menu bar or on the desktop.
    There should already be a bookmark labeled `IBM Dashboard Application` on the firefox Bookmark toolbar area. 

    Login as user `ncoadmin` with password `ncoadmin`. then click on the Use Case 1 below.

    [Use Case 1: Anomaly Dashboard and Causal Group](./uc1/)

    [Use Case 2: Flat line causing Slow Response Time](./uc2/)

    [Use Case 3: Dynamic Threshold](./uc3/)

    [Use Case 4: Forecast](./uc4/)

    [Mediation](./mediation/)

    [Reference](./ref/)


[Next >](./uc1/)