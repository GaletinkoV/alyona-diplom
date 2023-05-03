import React from "react";

const GeneralPage = () => {
  return <div>IMECA is a software security analysis method used to assess and identify potential security threats. 
    The method is based on the use of the main components: threat models and risk assessment matrix. 
    Threat models are a set of potential attacks that can be aimed at a system and their characteristics, such as attack objects, their feasibility, and consequences. 
    A risk assessment matrix is a tool used to determine the level of risk for each potential threat. The level of risk is determined based on the probability of the threat and its consequences. IMECA analysis provides an opportunity to identify potential software security issues and develop a security strategy. Since the method can be applied to any type of software, IMECA analysis can also be used to assess the security of web services. Analysis can help identify potential weaknesses in the security of a web service, such as vulnerabilities in the process of authentication, authorization, data transmission, etc. 
    IMECA can also help identify insufficient security measures, such as insufficient access control, improperly configured firewall, lack of data encryption, etc. After the analysis, recommendations can be made to improve the security level of the web service, such as installing additional security measures or configuring existing security measures.
    <br/>
    To determine the level of danger using IMECA analysis, the following parameters are used:
    <ul>
      <li>threat (used to attack the system);</li>
      <li>vulnerability (weak part of the system, thanks to which an attack is possible);</li>
      <li>attack (type of invasion);</li>
      <li>effects (consequences that can be caused by an attack);</li>
      <li>probability (an indicator that determines how likely an attack is to occur);</li>
      <li>severity (part of criticality, which determines how serious and dangerous the attack will be in terms of consequences);</li>
      <li>risk (the cumulative effect of an attack on the system, determined by multiplying probability and severity);</li>
      <li>countermeasures (and means and actions aimed at countering attacks and minimizing likely consequences).</li>
    </ul>
    
    <img src="/imeca.png" width="800" height="700"></img>
    </div>;
};

export default GeneralPage;
