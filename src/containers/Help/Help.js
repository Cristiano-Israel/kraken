import React, { Component } from 'react';
import isElectron from 'is-electron';
import Toolbar from '../../components/Toolbar/Toolbar'
import AuthenticationService from '../../services/AuthenticationService'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Octicon, { Star, DesktopDownload, Rocket, Gear, GitPullRequest, LogoGithub, Heart, Alert, Shield } from '@githubprimer/octicons-react';
import { HashLink as ScrollableLink } from 'react-router-hash-link';
import krakenLogo from './../../assets/kraken-logo.png';
import CreateRequestButton from './../../assets/screenshots/create-new-request-button.png'
import CreateRequestModal from './../../assets/screenshots/create-new-request-modal.png'
import StartWorkerButton from './../../assets/screenshots/start-worker-button.png'
import Worker from './../../assets/screenshots/worker.png'

import classes from './Help.module.css'

class Help extends Component {

    render() {
        // NavLinks for Toolbar
        let navLinks = [];
        if (AuthenticationService.isLoggedIn())
            navLinks.push({ text: 'Dashboard', onClick: () => { this.props.history.push('/dashboard'); }, isPrimary: true });
        else
            navLinks.push({ text: 'Login', onClick: () => { this.props.history.push('/login'); }, isPrimary: true });
        navLinks.push({ text: 'Register', onClick: () => { this.props.history.push('/register') } })
        navLinks.push({ text: 'Forgot Password', onClick: () => { this.props.history.push('/forgot-password'); } })
        const toolbar = isElectron() ? <Toolbar navLinks={navLinks} type='electron' /> : <Toolbar navLinks={navLinks} type='web' />

        return (
            <div>
                {toolbar}
                <div className={classes.sun}>
                    <h1>Kraken How To Guide</h1>
                </div>
                <div className={classes.panelContainer}>

                    <div className={classes.panel}>
                        <ScrollableLink smooth to="/help#introduction" className={classes.panelLink}>
                            <div className={classes.panelImageContainer}>
                                <Octicon icon={Star} />
                            </div>
                            <h3 className={classes.panelTitle}>What is Kraken</h3>
                            <p className={classes.panelText}>Introduction</p>
                            <div className={classes.panelFooter} />
                        </ScrollableLink>
                    </div>

                    <div className={classes.panel}>
                        <ScrollableLink smooth to="/help#installation" className={classes.panelLink}>
                            <div className={classes.panelImageContainer}>
                                <Octicon icon={DesktopDownload} />
                            </div>
                            <h3 className={classes.panelTitle}>Installation</h3>
                            <p className={classes.panelText}>Mac, Unix and Windows installation</p>
                            <div className={classes.panelFooter} />
                        </ScrollableLink>
                    </div>

                    <div className={classes.panel}>
                        <ScrollableLink smooth to="/help#how-to" className={classes.panelLink}>
                            <div className={classes.panelImageContainer}>
                                <Octicon icon={Rocket} />
                            </div>
                            <h3 className={classes.panelTitle}>How to Use Kraken</h3>
                            <p className={classes.panelText}>Step by step usage guide</p>
                            <div className={classes.panelFooter} />
                        </ScrollableLink>
                    </div>

                    <div className={classes.panel}>
                        <ScrollableLink smooth to="/help#supported-algo" className={classes.panelLink}>
                            <div className={classes.panelImageContainer}>
                                <Octicon icon={Gear} />
                            </div>
                            <h3 className={classes.panelTitle}>Supported Algorithms</h3>
                            <p className={classes.panelText}>WPA/WPA2 etc</p>
                            <div className={classes.panelFooter} />
                        </ScrollableLink>
                    </div>

                    <div className={classes.panel}>
                        <ScrollableLink smooth to="/help#privacy-policy" className={classes.panelLink}>
                            <div className={classes.panelImageContainer}>
                                <Octicon icon={Shield} />
                            </div>
                            <h3 className={classes.panelTitle}>Privacy Policy</h3>
                            <p className={classes.panelText}>Check how we (don't) use your data</p>
                            <div className={classes.panelFooter} />
                        </ScrollableLink>
                    </div>

                    <div className={classes.panel}>
                        <a href="/help#disclaimer" className={classes.panelLink}>
                            <div className={classes.panelImageContainer}>
                                <Octicon icon={Alert} />
                            </div>
                            <h3 className={classes.panelTitle}>Disclaimer</h3>
                            <p className={classes.panelText}>Please do not misuse this software</p>
                            <div className={classes.panelFooter} />
                        </a>
                    </div>

                    <div className={classes.panel}>
                        <ScrollableLink smooth to="/help#help-out" className={classes.panelLink}>
                            <div className={classes.panelImageContainer}>
                                <Octicon icon={GitPullRequest} />
                            </div>
                            <h3 className={classes.panelTitle}>Help Out</h3>
                            <p className={classes.panelText}>Contribute to Kraken and Acknowledgements</p>
                            <div className={classes.panelFooter} />
                        </ScrollableLink>
                    </div>

                    <div className={classes.panel}>
                        <ScrollableLink smooth to="/help#donate" >
                            <div className={classes.panelImageContainer}>
                                <Octicon icon={Heart} />
                            </div>
                            <h3 className={classes.panelTitle}>Donate</h3>
                            <p className={classes.panelText}>Help with costs of maintaining Kraken</p>
                            <div className={classes.panelFooter} />
                        </ScrollableLink>
                    </div>
                </div>

                <div className={classes.content}>
                    <div className={classes.logoContainer}>
                        <img alt="" src={krakenLogo} width="225" height="225" />
                    </div>

                    <div id={'introduction'}>
                        <h3>What is Kraken</h3>
                    </div>
                    <p>
                        Kraken is an online distributed brute-force password cracking tool.
                        It allows you to parallelize password-list and `crunch` based cracking across multiple machines to create a cluster of crackers
                        which can be run within the brower without installation or a desktop application (coming soon). Kraken is easy to use, fault tolerant
                        and can adjust to different cracking speeds automatically.
                        <br />
                        I made Kraken because I wanted to learn more about offensive security and frustration that using tools like aircrack and hashcat meant I could only
                        run them on a single machine. Plus installing so many programs through command line was a bit annoying too! I wanted to make brute force cracking as seamless
                        and easy as possible. If you want to help me on this journey through <a href="#help-out">code</a> or <a href="#donate">monetarily</a>, I would be glad to chat.
                    </p>
                    <br />

                    <div id={'installation'}>
                        <h3>Installation</h3>
                    </div>
                    <h5>Browser Client</h5>
                    <p>
                        The brower client does not need installation and can be run directly from a Chrome, Firefox and Safari Browser.
                        <br />
                        <strong>Note: </strong> The browser client is <strong>significantly</strong> slower than the deskop based client since it does not use the GPU.
                    </p>
                    <br />

                    <h5>Desktop Client</h5>
                    <p>
                        The desktop client is packaged for Windows, Mac and Linux. The application runs inside an electron shell packaging the contents of the browser app
                        with nodejs integration and uses <a href="https://hashcat.net/" target="_blank" rel="noopener noreferrer">Hashcat</a> for cracking.
                        <strong>Note: </strong> The app has node integration enabled to access local resources but sets itself as the only source of scripts.
                        All client code is available on Github.
                        <br />
                        <h6>Mac</h6>
                        The kraken-client app runs as a dmg. Double click to mount it and install by dragging it into applications. Hashcat must be available on command line to
                        use kraken-client. Install Hashcat by running the following <strong>brew</strong> command:
                        <SyntaxHighlighter language="bash" style={github}>brew install hashcat</SyntaxHighlighter>
                        If you dont not have brew installed on your machine, install it with :
                        <SyntaxHighlighter language="bash" style={github}>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</SyntaxHighlighter>
                        <br />
                        <h6>Windows Client</h6>
                        The kraken-client app runs as a portable exe file and requires no installation apart from placing the Hashcat files (executable and dlls) in the same
                        directory as kraken-client. Hashcat files can be dowloaded from their home page (https://hashcat.net/hashcat/) or <a href="https://hashcat.net/files/hashcat-5.1.0.7z">here</a>.
                        <br />
                        <h6>Linux Client</h6>
                        The kraken-client runs as an AppImage and requires no installation apart from Hashcat. To run it, simply right click to access file properties, go to the permissions tab,
                        and check 'Allow executing file as program'. Double click to start. To install Hashcat run the <strong>aptitude</strong> command :
                        <SyntaxHighlighter language="bash" style={github}>sudo apt-get install hashcat</SyntaxHighlighter>
                    </p>
                    <br />

                    <div id={'how-to'}>
                        <h3>How do I use Kraken</h3>
                    </div>
                    <p>

                        <ul>
                            <li><a href="/help#how-to_wpa-guide">Guide for WPA/WPA2</a></li>
                            <li><a href="/help#how-to_faq">FAQs</a></li>
                        </ul>
                        <br />

                        <div id={'how-to_wpa-guide'}><h4>Guide for WPA/WPA2</h4></div>
                        <br />

                        <h5>Step 1</h5>
                        The first step is to aquire a packet capture in pcap or cap format which contains the 4 way WPA/WPA2 handshake. To learn more about capturing handshakes
                        click <a href="https://www.kalitutorials.net/2014/06/hack-wpa-2-psk-capturing-handshake.html">here</a>.
                        There are numerous guides you can find on the net for
                        <a href="https://louisabraham.github.io/articles/WPA-wifi-cracking-MBP.html"> mac</a>,
                        <a href="https://www.aircrack-ng.org/doku.php?id=cracking_wpa"> linux </a> and
                        <a href="http://mohanthemass.blogspot.com/2015/03/wi-fi-wifi-is-short-form-for-wireless.html"> windows</a>.
                        These guides assume that your WiFi card supports the kind of attack you want to perform; If you want to passively capture handshakes, your card must be able to
                        go into monitor mode otherwise for <strong>deauthentication</strong> attack it needs to  perform packet injection as well.
                        These guides may go offline, I've rehashed some of them and added them here so you don't have to navigate endlessly through the web to find something that works:
                        <ul>
                            <li>
                                <strong>Linux:</strong> Capturing a handshake on Linux is by far the easiest and fastest in my opinion because of how easy it is to perform an <strong>active</strong> capture.
                                Start by opening a terminal (Alt + T) or the launcher and select terminal and install <strong>aircrack-ng</strong> suite.
                                <SyntaxHighlighter language="bash" style={github}>sudo apt-get install aircrack-ng</SyntaxHighlighter>
                                Use <strong>ifconfig</strong> to identify your WiFi interface. Lets assume its <strong>wlan0</strong>.
                                <SyntaxHighlighter language="bash" style={github}>ifconfig</SyntaxHighlighter>
                                Run <strong>besside-ng</strong> and watch the magic happen.
                                <SyntaxHighlighter language="bash" style={github}>sudo besside-ng wlan0</SyntaxHighlighter>
                                The `besside-ng` program should create a file called <strong>wpa.cap</strong> in your <strong>home</strong> directory which you can upload to Kraken.
                            </li>
                            <li>
                                <strong>OSX:</strong> The script below performs a <strong>passive</strong> capture by scanning the current area, listing all the Wifi's available and after you provide it a target,
                                listens until it captures a handshake.
                                <br />
                                I assume your Wifi Interface name is <strong>en0</strong> but you can change this to match the interface name on your machine from the 'ifconfig' commmand.
                                <SyntaxHighlighter language="bash" style={github} showLineNumbers>
                                    {
                                        'echo "Scanning..." \n' +
                                        'sudo airport scan # scan current area \n' +
                                        '\n' +
                                        'echo "What is the BSSID of the target network?" \n' +
                                        'read BSSID \n' +
                                        '\n' +
                                        'echo "What channel is the target network running on?" \n' +
                                        'read CHANNEL \n' +
                                        '\n' +
                                        'echo Targetting network $BSSID on channel $CHANNEL \n' +
                                        '\n' +
                                        'sudo airport -z # Leave with current network (if connected) \n' +
                                        'sudo airport -c$CHANNEL # Activate Monitor Mode \n' +
                                        'sudo tcpdump "type mgt subtype beacon and ether src $BSSID" -I -c 1 -i en0 -w beacon.cap # Send Beacon \n' +
                                        'sudo tcpdump "ether proto 0x888e and ether host $BSSID" -I -c 4 -U -vvv -i en0 -w handshake.cap # Listen for Handshake \n' +
                                        'mergecap -a -F pcap -w capture.cap beacon.cap handshake.cap # Merge captures \n' +
                                        'sudo rm beacon.cap # remove raw cap \n' +
                                        'sudo rm handshake.cap # remove raw cap'
                                    }
                                </SyntaxHighlighter>
                                This script will create a packet capture file called <strong>capture.cap</strong> that you can upload to Kraken.
                                <br />
                                <strong>Note: </strong> You can make this process faster by performing a deauthentication attack but in my tests, my machine cannot sniff and
                                inject packets at the same time.
                            </li>
                            <li>
                                <strong>Windows:</strong> [Coming Soon]
                            </li>
                        </ul>
                        <br />

                        <h5>Step 2</h5>
                        Start by clicking the "Create New Request" button on the toolbar which should open a modal.
                        <br />
                        <img src={CreateRequestButton} alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', objectFit: 'scale-down', width: '50%' }} />

                        <h5>Step 3</h5>
                        Fill the fields of the modal and press submit. The following example shows a WPA/WPA2 request being created.
                        <br />
                        <img src={CreateRequestModal} alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', objectFit: 'scale-down', width: '50%' }} />
                        <ol>
                            <li><strong>Request Name :</strong> This is the friendly name that Kraken will use to refer to this request. It does not have to be unique</li>
                            <li><strong>Request Type :</strong> This indicates what type of request it will be. Currently we support only WPA/WPA2</li>
                            <li><strong>Target Network SSID:</strong> Unique to WPA/WPA2, this field indicate which SSID you want to target in your packet capture </li>
                            <li><strong>Packet Capture CAP/PCAP:</strong> Unique to WPA/WPA2, this is the packet capture file that contains the target handshake </li>
                            <li>
                                <strong>Password List :</strong> This field specifies which password lists you want to use to attempt to crack target WPA/WPA2 handshake.
                                You can add lists by clicking on the dropdown and pressing the add button and remove them by clicking on the pill in the display. There are many
                                password lists to choose from including <strong>darkc0de.lst</strong>, <strong>rockyou.txt</strong>, <strong>bigWPA</strong> and others.
                            </li>
                            <li>
                                <strong>Crunch Parameters : </strong> This field specifies the crunch parameters you want to use to attempt to crack target WPA/WPA2 handshake.
                            Crunch is a program that allows you to generate candidate values based on 3 parameters : <strong>Minimum Length</strong>, <strong>Maximum Length </strong>
                                and <strong>Character Set</strong>. You can optionally also provide a starting value. In the example above, crunch will generate all combinations of
                            numbers of length 8. Click here learn more about <a href="http://manpages.ubuntu.com/manpages/bionic/man1/crunch.1.html"
                                    target="_blank" rel="noopener noreferrer">crunch</a>.
                            </li>
                        </ol>

                        <h5>Step 4</h5>
                        A new request should have been created in the active request column. Now click the start worker button to create a worker. The worker will be assinged a random name
                        and should be visible in "Total Workers" column. If you have an active request, the worker will automatically fetch jobs from the server and start processing them.
                        <img src={StartWorkerButton} alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', objectFit: 'scale-down', width: '50%' }} />
                        <img src={Worker} alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', objectFit: 'scale-down', width: '50%' }} />
                        In the browser client, workers run within the browser with cracking being performed in Javascript and hence is much slower than the desktop client.
                        If you close the tab in which the worker is running, the worker will go offline. In the desktop client, cracking is performed by Hashcat which can utilize
                        the machine's CPU and GPU so its <strong>much faster</strong>.
                        <br />  

                        <br /> 
                        <div id={'how-to_faq'}><h4>FAQs</h4></div>

                        <h5>What does Kraken do exactly?</h5>     
                        Kraken attempts to solve two key issues with brute-force password cracking. First, it lowers the barrier to entry by allowing users to crack passwords 
                        without having to install anything directly through their browser or a simple local client. No more downloading massive password lists! Second, 
                        it distributes workloads over multiple user-provided machines so you are not forced to crack on a single machine and can scale your cracking operation 
                        based on how you see fit. Kraken is fault-tolerant too so if a worker goes offline while processing a job, the job is tracked and recovered and given to
                        another worker.
                        <br /> 

                        <br /> 
                        <h5>Do I need multiple workers (browser windows) to use my multi-core machine more efficiently?</h5>
                        Kraken provides the ability to adjust the number of cores it uses on a single browser window so you do not need to open multiple tabs and run workers on them.
                        By default, Kraken will use [total core count of your machine] -1 cores. Hence, if your computer has an 8 core machine, by default Kraken will use 7 cores to 
                        crack so that the last core is free process UI changes and other tasks on your machine. You can lower this based on what on what you see fit.
                        <br /> 

                        <br /> 
                        <h5>Why does my local worker not work when I enable both my CPU and GPU?</h5>
                        If hashcat detects a GPU on your machine, it does not like enabling both CPU and GPU. While Kraken does allow you to force this,
                        hashcat will most likely throw many errors.
                        <br /> 

                        <br /> 
                        <h5>Why do you have node integration enabled on in the local client (electron app)?</h5>
                        The local app needs access to your machine's terminal to run hashcat. This is why the local app's script
                        policy is 'self' only packaged code and nothing else can be executed. Also, all of Kraken client code is available on Github for you to check and test.
                        <br /> 

                        <br /> 
                        <h5>Why does Kraken say "0 targets matched criteria"? </h5>
                        It means that target SSID you specified in the filter was not found in your capture. Kraken uses cap2hccapx from hashcat-utils to validate your packet capture. 
                        Use the <a href="https://www.onlinehashcrack.com/tools-cap-to-hccapx-converter.php" target="_blank" rel="noopener noreferrer">online tool</a> to verify it
                        if it is giving you trouble. I'll soon be adding direct hashes as part of the request so you can extract the PMK and other values yourself in a file.
                        <br /> 

                        <br /> 
                        <h5>Why does Kraken say "Unexpected fixed contents" ?</h5>
                        Are you sure you uploaded a cap/pcap/hccapx file. Be honest. Kraken certainly doesnt think so.
                        <br /> 
                    </p>
                    <br />

                    <div id={'supported-algo'}>
                        <h3>Supported Algorithms</h3>
                    </div>
                    <p>
                        Currently Kraken supports only WPA/WPA2 only. I intend on adding more algorithms but first I want to focus on WPA/WPA2
                    </p>
                    <br />

                    <div id={'privacy-policy'}>
                        <h3>Privacy Policy</h3>
                    </div>
                    <p>
                        Your privacy is important to us. It is Kraken's policy to respect your privacy regarding any information we may collect from you across our website, https://kraken.work, and other sites we own and operate.
                        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                        Information that is asked for is name and email. All other data is within your control and can be removed on the dashboard. No hash that is uploaded is kept longer than to service the active request.
                        We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                        We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
                        You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                        Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                        This policy is effective as of 1 January 2020.
                    </p>
                    <br />

                    <div id={'disclaimer'}>
                        <h3>Disclaimer</h3>
                    </div>
                    <p>
                        <strong>Disclaimer : </strong> THIS SOFTWARE COMES WITH NO WARRANTY WHATSOEVER. THE AUTHOR IS NOT RESPONSIBLE FOR ANY DAMAGE CAUSED BY THE (MIS)USE OF THIS SOFTWARE!
                        <br />
                        This tool is meant for enthusiasts to attempt to break into system they control to learn pentration testing and do not want to go through the hassle of setting up their
                        own cracking cluster.
                    </p>
                    <br />

                    <div id={'help-out'}>
                        <h3>Help Out</h3>
                    </div>
                    <p>
                        <h5>Contribute Code to Kraken</h5>
                        If you would like to contribute to Kraken server, email me at <a href="mailto:waliusmani@gmail.com">waliusmani[AT]gmail[DOT]com</a>
                        and possibly join me in my journey to make usable security tools by becoming part of the Kraken team. If you would like to contribute
                        to Kraken Client, feel free to do so by creating a pull request or an issue at
                        <a href="https://github.com/arcaneiceman/kraken-client" target="_blank" rel="noopener noreferrer">
                            <button style={{ textAlign: 'center' }}> <Octicon icon={LogoGithub} /> </button>
                        </a>
                        I would gladly accept help if you want to join me as a part of the Kraken team as well.
                        <br />

                        <h5>Shout Out</h5>
                        I would like to give a shout out to the following teams/people that helped me make this possible in no particular order.
                        <ul>
                            <li><strong><a href="https://github.com/derv82" target="_blank" rel="noopener noreferrer">Derv82</a></strong></li>
                            <li><strong><a href="http://ttt.studio/" target="_blank" rel="noopener noreferrer" >TTT Studios</a></strong></li>
                            <li>All others who write amazing code to make all this possible</li>
                        </ul>
                    </p>
                    <br />

                    <div id={'donate'}>
                        <h3>Donate</h3>
                    </div>
                    <p>
                        Hi there! If you would like to contribute $1 or more for the smooth running of Kraken, it would be greatly appreciated.
                        If only a 100 people dontate, I could keep kraken running for 6 months! Any amount raised above the running costs will
                        be used to buy better infrastructure! Thank you!
                        <div className={classes.donationContainer}>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_donations" />
                                <input type="hidden" name="business" value="ZAKGHMTXN8D5E" />
                                <input type="hidden" name="item_name" value="Supporting website" />
                                <input type="hidden" name="currency_code" value="CAD" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            </form>
                            <p>Bitcoin Address</p>
                            <p className={classes.bitcoinAddress}>1ErQ7BSEB19cUbuqDwQRLb199sRVabA5w</p>
                        </div>
                    </p>
                    <br />
                </div>
            </div >
        )
    }
}

export default Help;