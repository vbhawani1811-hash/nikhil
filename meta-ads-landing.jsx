<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nikhil S. - Meta Ads Expert | $300K+ Upwork Earnings</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-blue: #2563EB;
            --success-green: #10B981;
            --accent-gold: #F59E0B;
            --dark: #111827;
            --tech-cyan: #06B6D4;
            --neon-purple: #A855F7;
            --bg-light: #F9FAFB;
            --text-secondary: #6B7280;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            line-height: 1.6;
            color: var(--dark);
            overflow-x: hidden;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Upwork Profile Section */
        .upwork-profile-section {
            padding: 60px 20px 40px;
            position: relative;
            overflow: hidden;
        }

        .upwork-profile-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
        }

        .profile-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            padding: 40px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
            animation: float 4s ease-in-out infinite;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
        }

        .profile-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 60px rgba(37, 99, 235, 0.4);
            border-color: rgba(37, 99, 235, 0.5);
        }

        .scan-line {
            position: absolute;
            top: -100%;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--tech-cyan), transparent);
            animation: scan 3s ease-in-out infinite;
        }

        @keyframes scan {
            0% { top: -100%; opacity: 0; }
            50% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }

        .data-stream {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.03;
            pointer-events: none;
            font-family: monospace;
            font-size: 12px;
            color: var(--tech-cyan);
            overflow: hidden;
        }

        .particle-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--tech-cyan);
            border-radius: 50%;
            opacity: 0.6;
            animation: particle-float 8s ease-in-out infinite;
        }

        @keyframes particle-float {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(20px, -30px); }
            50% { transform: translate(-10px, -50px); }
            75% { transform: translate(30px, -20px); }
        }

        .profile-content {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 30px;
            align-items: center;
            position: relative;
            z-index: 1;
        }

        .profile-image-container {
            position: relative;
        }

        .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 3px solid var(--accent-gold);
            transition: all 0.4s ease;
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
        }

        .profile-card:hover .profile-image {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(245, 158, 11, 0.6);
        }

        .profile-info h1 {
            font-size: 32px;
            font-weight: 800;
            color: white;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .verified-badge {
            width: 24px;
            height: 24px;
            background: var(--success-green);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
            animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 10px rgba(16, 185, 129, 0.5); }
            50% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.8); }
        }

        .profile-stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 30px;
        }

        .stat-card {
            background: rgba(255, 255, 255, 0.08);
            padding: 20px;
            border-radius: 16px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .stat-card:hover {
            transform: scale(1.05);
            background: rgba(255, 255, 255, 0.12);
            border-color: var(--primary-blue);
        }

        .stat-value {
            font-size: 28px;
            font-weight: 800;
            color: var(--accent-gold);
            margin-bottom: 5px;
            animation: countUp 2s ease-out;
        }

        @keyframes countUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .stat-label {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.7);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            padding: 60px 20px 80px;
            text-align: center;
            color: white;
        }

        .hero h2 {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 20px;
            line-height: 1.2;
            animation: fadeInUp 0.8s ease;
        }

        .hero p {
            font-size: 22px;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 40px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            animation: fadeInUp 0.8s ease 0.2s backwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 0.8s ease 0.4s backwards;
        }

        .btn {
            padding: 16px 32px;
            font-size: 18px;
            font-weight: 600;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary {
            background: var(--primary-blue);
            color: white;
            box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
            animation: pulse-button 2s ease-in-out infinite;
        }

        @keyframes pulse-button {
            0%, 100% { box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4); }
            50% { box-shadow: 0 8px 30px rgba(37, 99, 235, 0.6); }
        }

        .btn-primary:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 30px rgba(37, 99, 235, 0.6);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: var(--tech-cyan);
        }

        /* Timeline Section */
        .timeline-section {
            background: white;
            padding: 80px 20px;
        }

        .section-title {
            text-align: center;
            font-size: 42px;
            font-weight: 800;
            margin-bottom: 50px;
            color: var(--dark);
        }

        .timeline {
            max-width: 1000px;
            margin: 0 auto;
            position: relative;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 100%;
            background: linear-gradient(180deg, var(--primary-blue), var(--tech-cyan));
            border-radius: 2px;
        }

        .timeline-item {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 60px;
            position: relative;
        }

        .timeline-content {
            background: var(--bg-light);
            padding: 30px;
            border-radius: 16px;
            border: 2px solid transparent;
            transition: all 0.4s ease;
            cursor: pointer;
        }

        .timeline-content:hover {
            border-color: var(--primary-blue);
            transform: scale(1.03);
            box-shadow: 0 10px 30px rgba(37, 99, 235, 0.2);
        }

        .timeline-month {
            font-size: 24px;
            font-weight: 800;
            color: var(--primary-blue);
            margin-bottom: 10px;
        }

        .timeline-activities {
            list-style: none;
            margin-top: 15px;
        }

        .timeline-activities li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
            color: var(--text-secondary);
        }

        .timeline-activities li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--success-green);
            font-weight: bold;
        }

        /* Quiz Section */
        .quiz-section {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            padding: 80px 20px;
            color: white;
        }

        .quiz-container {
            max-width: 700px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            padding: 40px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .quiz-question {
            margin-bottom: 30px;
        }

        .quiz-question h3 {
            font-size: 22px;
            margin-bottom: 20px;
        }

        .quiz-options {
            display: grid;
            gap: 15px;
        }

        .quiz-option {
            background: rgba(255, 255, 255, 0.08);
            padding: 18px 24px;
            border-radius: 12px;
            border: 2px solid transparent;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .quiz-option:hover {
            border-color: var(--primary-blue);
            background: rgba(255, 255, 255, 0.12);
        }

        .quiz-option.selected {
            border-color: var(--success-green);
            background: rgba(16, 185, 129, 0.2);
        }

        .quiz-result {
            background: rgba(16, 185, 129, 0.2);
            border: 2px solid var(--success-green);
            padding: 30px;
            border-radius: 16px;
            margin-top: 30px;
            text-align: center;
            display: none;
        }

        .quiz-result.show {
            display: block;
            animation: slideInUp 0.5s ease;
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Calculator Section */
        .calculator-section {
            background: white;
            padding: 80px 20px;
        }

        .calculator-container {
            max-width: 800px;
            margin: 0 auto;
            background: var(--bg-light);
            padding: 40px;
            border-radius: 24px;
            border: 2px solid var(--primary-blue);
        }

        .calculator-inputs {
            display: grid;
            gap: 25px;
            margin-bottom: 30px;
        }

        .input-group {
            display: flex;
            flex-direction: column;
        }

        .input-group label {
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--dark);
        }

        .input-group input {
            padding: 14px 18px;
            border: 2px solid #E5E7EB;
            border-radius: 10px;
            font-size: 16px;
            transition: all 0.3s ease;
        }

        .input-group input:focus {
            outline: none;
            border-color: var(--primary-blue);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .calculator-results {
            background: white;
            padding: 30px;
            border-radius: 16px;
            margin-top: 30px;
            display: none;
        }

        .calculator-results.show {
            display: block;
            animation: slideInUp 0.5s ease;
        }

        .result-item {
            display: flex;
            justify-content: space-between;
            padding: 15px 0;
            border-bottom: 1px solid #E5E7EB;
        }

        .result-item:last-child {
            border-bottom: none;
        }

        .result-value {
            font-size: 24px;
            font-weight: 800;
            color: var(--success-green);
        }

        /* Case Studies Section */
        .case-studies-section {
            background: var(--bg-light);
            padding: 80px 20px;
        }

        .filter-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 50px;
        }

        .filter-btn {
            padding: 12px 24px;
            background: white;
            border: 2px solid var(--primary-blue);
            border-radius: 25px;
            color: var(--primary-blue);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .filter-btn:hover, .filter-btn.active {
            background: var(--primary-blue);
            color: white;
            transform: scale(1.05);
        }

        .case-studies-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .case-study-card {
            background: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease;
            cursor: pointer;
        }

        .case-study-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(37, 99, 235, 0.2);
        }

        .case-study-tag {
            display: inline-block;
            padding: 6px 14px;
            background: var(--primary-blue);
            color: white;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 15px;
        }

        .case-study-card h3 {
            font-size: 22px;
            margin-bottom: 15px;
            color: var(--dark);
        }

        .case-study-metrics {
            display: grid;
            gap: 10px;
            margin-top: 20px;
        }

        .metric {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .metric-value {
            font-size: 20px;
            font-weight: 800;
            color: var(--success-green);
        }

        /* Chat Interface */
        .chat-widget {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
        }

        .chat-button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-blue), var(--neon-purple));
            border: none;
            color: white;
            font-size: 28px;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(37, 99, 235, 0.5);
            transition: all 0.3s ease;
            animation: pulse-chat 2s ease-in-out infinite;
        }

        @keyframes pulse-chat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .chat-button:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 30px rgba(37, 99, 235, 0.7);
        }

        .chat-window {
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 400px;
            height: 600px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 60px rgba(0, 0, 0, 0.3);
            display: none;
            flex-direction: column;
            overflow: hidden;
        }

        .chat-window.open {
            display: flex;
            animation: slideInUp 0.4s ease;
        }

        .chat-header {
            background: linear-gradient(135deg, var(--primary-blue), var(--neon-purple));
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .chat-header h3 {
            font-size: 18px;
            font-weight: 700;
        }

        .chat-close {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .chat-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: var(--bg-light);
        }

        .message {
            margin-bottom: 15px;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .message.bot {
            text-align: left;
        }

        .message.user {
            text-align: right;
        }

        .message-content {
            display: inline-block;
            padding: 12px 18px;
            border-radius: 18px;
            max-width: 80%;
        }

        .message.bot .message-content {
            background: white;
            color: var(--dark);
            border: 1px solid #E5E7EB;
        }

        .message.user .message-content {
            background: var(--primary-blue);
            color: white;
        }

        .chat-input-container {
            padding: 20px;
            background: white;
            border-top: 1px solid #E5E7EB;
            display: flex;
            gap: 10px;
        }

        .chat-input {
            flex: 1;
            padding: 12px 18px;
            border: 2px solid #E5E7EB;
            border-radius: 25px;
            font-size: 14px;
            outline: none;
        }

        .chat-input:focus {
            border-color: var(--primary-blue);
        }

        .chat-send {
            background: var(--primary-blue);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .chat-send:hover {
            background: #1d4ed8;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .profile-content {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .profile-stats {
                grid-template-columns: repeat(2, 1fr);
            }

            .hero h2 {
                font-size: 32px;
            }

            .hero p {
                font-size: 18px;
            }

            .timeline::before {
                left: 20px;
            }

            .timeline-item {
                grid-template-columns: 1fr;
                padding-left: 50px;
            }

            .case-studies-grid {
                grid-template-columns: 1fr;
            }

            .chat-window {
                width: 100%;
                height: 100%;
                bottom: 0;
                right: 0;
                border-radius: 0;
            }

            .stat-value {
                font-size: 24px;
            }

            .section-title {
                font-size: 32px;
            }
        }

        .typing-indicator {
            display: inline-flex;
            gap: 4px;
            padding: 12px 18px;
        }

        .typing-dot {
            width: 8px;
            height: 8px;
            background: var(--text-secondary);
            border-radius: 50%;
            animation: typing 1.4s ease-in-out infinite;
        }

        .typing-dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes typing {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-10px); }
        }
    </style>
</head>
<body>
    <!-- Upwork Profile Section -->
    <section class="upwork-profile-section">
        <div class="upwork-profile-container">
            <div class="profile-card">
                <div class="scan-line"></div>
                <div class="particle-container" id="particleContainer"></div>
                <div class="data-stream" id="dataStream"></div>
                
                <div class="profile-content">
                    <div class="profile-image-container">
                        <img src="https://via.placeholder.com/120" alt="Nikhil S." class="profile-image" id="profileImage">
                    </div>
                    <div class="profile-info">
                        <h1>
                            Nikhil S.
                            <span class="verified-badge">✓</span>
                        </h1>
                        <p style="color: rgba(255,255,255,0.8); font-size: 18px; margin-bottom: 5px;">Meta Ads Expert | Facebook & Instagram Ads Specialist</p>
                        <p style="color: var(--accent-gold); font-size: 16px; font-weight: 600;">Top Rated Plus • 99% Job Success Score</p>
                    </div>
                </div>

                <div class="profile-stats">
                    <div class="stat-card" data-tooltip="99% Client Satisfaction">
                        <div class="stat-value" data-count="99">0%</div>
                        <div class="stat-label">Job Success</div>
                    </div>
                    <div class="stat-card" data-tooltip="Completed Jobs">
                        <div class="stat-value" data-count="289">0</div>
                        <div class="stat-label">Projects</div>
                    </div>
                    <div class="stat-card" data-tooltip="Hours Billed">
                        <div class="stat-value" data-count="15523">0</div>
                        <div class="stat-label">Hours</div>
                    </div>
                    <div class="stat-card" data-tooltip="Average ROAS Delivered">
                        <div class="stat-value" data-count="20">0x</div>
                        <div class="stat-label">Avg ROAS</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h2>Stop Burning Money on 30-Day Facebook Ads Experiments</h2>
            <p>Join businesses who chose the proven 90-day system that turned $300K+ into real results</p>
            <div class="cta-buttons">
                <button class="btn btn-primary" onclick="scrollToSection('calculator')">Book Strategy Call - $45</button>
                <button class="btn btn-secondary" onclick="toggleChat()">Talk to AI Assistant</button>
            </div>
        </div>
    </section>

    <!-- 90-Day Timeline -->
    <section class="timeline-section">
        <div class="container">
            <h2 class="section-title">The 90-Day Meta Ads Roadmap</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <div class="timeline-month">Month 1: Setup & Learning</div>
                        <p>Foundation phase where Meta AI begins to understand your audience</p>
                        <ul class="timeline-activities">
                            <li>Facebook Ads setup with pixel & conversion tracking</li>
                            <li>AI learning phase begins (Advantage+, broad targeting)</li>
                            <li>Creative testing frameworks deployed</li>
                            <li>Baseline metrics established</li>
                        </ul>
                    </div>
                    <div></div>
                </div>

                <div class="timeline-item">
                    <div></div>
                    <div class="timeline-content">
                        <div class="timeline-month">Month 2: Optimization & Scaling</div>
                        <p>Performance improvements become visible as AI optimizes</p>
                        <ul class="timeline-activities">
                            <li>Kill weak ads, scale winning creatives</li>
                            <li>Meta AI optimization in full effect</li>
                            <li>CPC and CPA improvements visible</li>
                            <li>Funnel optimization & retargeting active</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-content">
                        <div class="timeline-month">Month 3: Stabilization & Performance</div>
                        <p>Predictable results and ready for aggressive scaling</p>
                        <ul class="timeline-activities">
                            <li>Stable CPL/CPA achieved</li>
                            <li>Predictable ROAS on Facebook & Instagram Ads</li>
                            <li>Clean reporting dashboards</li>
                            <li>Ready for aggressive scaling</li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quiz Section -->
    <section class="quiz-section">
        <div class="container">
            <h2 class="section-title" style="color: white;">Is My Business Ready for Meta Ads?</h2>
            <div class="quiz-container">
                <div class="quiz-question" data-question="1">
                    <h3>1. What's your monthly ad budget?</h3>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="selectQuizOption(this, 1, 'Under $1K')">Under $1K</div>
                        <div class="quiz-option" onclick="selectQuizOption(this, 1, '$1-5K')">$1-5K</div>
                        <div class="quiz-option" onclick="selectQuizOption(this, 1, '$5-15K')">$5-15K</div>
                        <div class="quiz-option" onclick="selectQuizOption(this, 1, '$15K+')">$15K+</div>
                    </div>
                </div>

                <div class="quiz-question" data-question="2" style="display: none;">
                    <h3>2. How long can you commit to testing?</h3>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="selectQuizOption(this, 2, '1 month')">1 month</div>
                        <div class="quiz-option" onclick="selectQuizOption(this, 2, '2 months')">2 months</div>
                        <div class="quiz-option" onclick="selectQuizOption(this, 2, '3+ months')">3+ months</div>
                    </div>
                </div>

                <div class="quiz-question" data-question="3" style="display: none;">
                    <h3>3. What's your primary goal?</h3>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="selectQuizOption(this, 3, 'Get leads')">Get leads</div>
                        <div class="quiz-option" onclick="selectQuizOption(this, 3, 'Scale e-commerce')">Scale e-commerce</div>
                        <div class="quiz-option" onclick="selectQuizOption(this, 3, 'Sell courses')">Sell courses</div>
                        <div class="quiz-option" onclick="selectQuizOption(this, 3, 'Brand awareness')">Brand awareness</div>
                    </div>
                </div>

                <div class="quiz-result" id="quizResult">
                    <h3 style="color: white; font-size: 28px; margin-bottom: 15px;">🎉 You're a Perfect Fit!</h3>
                    <p style="color: rgba(255,255,255,0.9); font-size: 18px;">Based on your answers, you're ready for the 90-day Meta Ads system. Let's schedule a strategy call to build your custom roadmap.</p>
                    <button class="btn btn-primary" style="margin-top: 20px;" onclick="scrollToSection('calculator')">Book Your Strategy Call</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Calculator Section -->
    <section class="calculator-section" id="calculator">
        <div class="container">
            <h2 class="section-title">ROI Calculator: See Your Potential</h2>
            <div class="calculator-container">
                <div class="calculator-inputs">
                    <div class="input-group">
                        <label>Current Monthly Revenue ($)</label>
                        <input type="number" id="currentRevenue" placeholder="50000" value="50000">
                    </div>
                    <div class="input-group">
                        <label>Current ROAS (Return on Ad Spend)</label>
                        <input type="number" id="currentROAS" placeholder="2" value="2" step="0.1">
                    </div>
                    <div class="input-group">
                        <label>Monthly Ad Spend ($)</label>
                        <input type="number" id="adSpend" placeholder="10000" value="10000">
                    </div>
                </div>
                <button class="btn btn-primary" onclick="calculateROI()" style="width: 100%;">Calculate My Potential</button>
                
                <div class="calculator-results" id="calculatorResults">
                    <h3 style="text-align: center; margin-bottom: 25px; color: var(--dark);">Your 90-Day Projection</h3>
                    <div class="result-item">
                        <span>Projected Monthly Revenue:</span>
                        <span class="result-value" id="projectedRevenue">$0</span>
                    </div>
                    <div class="result-item">
                        <span>Revenue Increase:</span>
                        <span class="result-value" id="revenueIncrease">+0%</span>
                    </div>
                    <div class="result-item">
                        <span>Projected ROAS:</span>
                        <span class="result-value" id="projectedROAS">0x</span>
                    </div>
                    <div class="result-item">
                        <span>Recommended Ad Spend:</span>
                        <span class="result-value" id="recommendedSpend">$0</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Case Studies Section -->
    <section class="case-studies-section">
        <div class="container">
            <h2 class="section-title">Success Stories</h2>
            <div class="filter-buttons">
                <button class="filter-btn active" onclick="filterCaseStudies('all')">All</button>
                <button class="filter-btn" onclick="filterCaseStudies('ecommerce')">E-commerce</button>
                <button class="filter-btn" onclick="filterCaseStudies('courses')">Courses</button>
                <button class="filter-btn" onclick="filterCaseStudies('leads')">Lead Gen</button>
            </div>

            <div class="case-studies-grid">
                <div class="case-study-card" data-category="ecommerce">
                    <span class="case-study-tag">E-commerce</span>
                    <h3>Fashion Brand Transformation</h3>
                    <p>Shopify store struggling with high CPC and low conversions turned into a profitable scaling machine.</p>
                    <div class="case-study-metrics">
                        <div class="metric">
                            <span>Transactions:</span>
                            <span class="metric-value">+400%</span>
                        </div>
                        <div class="metric">
                            <span>CPC Reduction:</span>
                            <span class="metric-value">-45%</span>
                        </div>
                        <div class="metric">
                            <span>Final ROAS:</span>
                            <span class="metric-value">12x</span>
                        </div>
                    </div>
                </div>

                <div class="case-study-card" data-category="ecommerce">
                    <span class="case-study-tag">E-commerce</span>
                    <h3>Home Goods Store Scale-Up</h3>
                    <p>Multi-channel approach combining Google Shopping and Meta Ads for explosive growth.</p>
                    <div class="case-study-metrics">
                        <div class="metric">
                            <span>ROAS Achieved:</span>
                            <span class="metric-value">20x</span>
                        </div>
                        <div class="metric">
                            <span>Revenue Growth:</span>
                            <span class="metric-value">+350%</span>
                        </div>
                        <div class="metric">
                            <span>Timeline:</span>
                            <span class="metric-value">90 Days</span>
                        </div>
                    </div>
                </div>

                <div class="case-study-card" data-category="leads">
                    <span class="case-study-tag">Lead Generation</span>
                    <h3>B2B SaaS Lead Machine</h3>
                    <p>Achieved stable cost per lead through systematic testing and Meta AI optimization.</p>
                    <div class="case-study-metrics">
                        <div class="metric">
                            <span>CPL Reduction:</span>
                            <span class="metric-value">-60%</span>
                        </div>
                        <div class="metric">
                            <span>Lead Quality:</span>
                            <span class="metric-value">+85%</span>
                        </div>
                        <div class="metric">
                            <span>Stable CPL:</span>
                            <span class="metric-value">60 Days</span>
                        </div>
                    </div>
                </div>

                <div class="case-study-card" data-category="courses">
                    <span class="case-study-tag">Online Courses</span>
                    <h3>Course Creator Breakthrough</h3>
                    <p>Built profitable funnel from cold traffic to course enrollment using Meta Ads.</p>
                    <div class="case-study-metrics">
                        <div class="metric">
                            <span>Enrollment Rate:</span>
                            <span class="metric-value">+280%</span>
                        </div>
                        <div class="metric">
                            <span>Cost Per Sale:</span>
                            <span class="metric-value">-52%</span>
                        </div>
                        <div class="metric">
                            <span>Final ROAS:</span>
                            <span class="metric-value">8.5x</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Chat Widget -->
    <div class="chat-widget">
        <button class="chat-button" onclick="toggleChat()">💬</button>
        <div class="chat-window" id="chatWindow">
            <div class="chat-header">
                <h3>AI Assistant</h3>
                <button class="chat-close" onclick="toggleChat()">×</button>
            </div>
            <div class="chat-messages" id="chatMessages">
                <div class="message bot">
                    <div class="message-content">
                        Hi! I'm here to help you understand how Nikhil's 90-day Meta Ads system works. What questions do you have?
                    </div>
                </div>
            </div>
            <div class="chat-input-container">
                <input type="text" class="chat-input" id="chatInput" placeholder="Type your question..." onkeypress="handleChatKeyPress(event)">
                <button class="chat-send" onclick="sendChatMessage()">Send</button>
            </div>
        </div>
    </div>

    <script>
        // Initialize particles
        function createParticles() {
            const container = document.getElementById('particleContainer');
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (8 + Math.random() * 4) + 's';
                container.appendChild(particle);
            }
        }

        // Data stream effect
        function createDataStream() {
            const stream = document.getElementById('dataStream');
            const chars = '01';
            let content = '';
            for (let i = 0; i < 500; i++) {
                content += chars[Math.floor(Math.random() * chars.length)];
                if (i % 50 === 0) content += '\n';
            }
            stream.textContent = content;
        }

        // Counter animation
        function animateCounters() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counters = entry.target.querySelectorAll('.stat-value');
                        counters.forEach(counter => {
                            const target = parseInt(counter.getAttribute('data-count'));
                            const duration = 2000;
                            const step = target / (duration / 16);
                            let current = 0;
                            
                            const timer = setInterval(() => {
                                current += step;
                                if (current >= target) {
                                    counter.textContent = target + (counter.textContent.includes('%') ? '%' : counter.textContent.includes('x') ? 'x' : '');
                                    clearInterval(timer);
                                } else {
                                    counter.textContent = Math.floor(current) + (counter.textContent.includes('%') ? '%' : counter.textContent.includes('x') ? 'x' : '');
                                }
                            }, 16);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(document.querySelector('.profile-stats'));
        }

        // Quiz functionality
        let quizAnswers = {};
        let currentQuestion = 1;

        function selectQuizOption(element, questionNum, answer) {
            const options = element.parentElement.querySelectorAll('.quiz-option');
            options.forEach(opt => opt.classList.remove('selected'));
            element.classList.add('selected');
            
            quizAnswers[questionNum] = answer;
            
            setTimeout(() => {
                const currentQ = document.querySelector(`[data-question="${questionNum}"]`);
                const nextQ = document.querySelector(`[data-question="${questionNum + 1}"]`);
                
                if (nextQ) {
                    currentQ.style.display = 'none';
                    nextQ.style.display = 'block';
                    currentQuestion = questionNum + 1;
                } else {
                    showQuizResult();
                }
            }, 300);
        }

        function showQuizResult() {
            document.querySelectorAll('.quiz-question').forEach(q => q.style.display = 'none');
            document.getElementById('quizResult').classList.add('show');
        }

        // Calculator
        function calculateROI() {
            const currentRevenue = parseFloat(document.getElementById('currentRevenue').value) || 0;
            const currentROAS = parseFloat(document.getElementById('currentROAS').value) || 0;
            const adSpend = parseFloat(document.getElementById('adSpend').value) || 0;

            const projectedROAS = Math.min(currentROAS * 2.25, 20);
            const projectedRevenue = currentRevenue * 2.4;
            const revenueIncrease = ((projectedRevenue - currentRevenue) / currentRevenue * 100).toFixed(0);
            const recommendedSpend = adSpend * 1.5;

            document.getElementById('projectedRevenue').textContent = '$' + projectedRevenue.toLocaleString();
            document.getElementById('revenueIncrease').textContent = '+' + revenueIncrease + '%';
            document.getElementById('projectedROAS').textContent = projectedROAS.toFixed(1) + 'x';
            document.getElementById('recommendedSpend').textContent = '$' + recommendedSpend.toLocaleString();
            
            document.getElementById('calculatorResults').classList.add('show');
        }

        // Case study filter
        function filterCaseStudies(category) {
            const cards = document.querySelectorAll('.case-study-card');
            const buttons = document.querySelectorAll('.filter-btn');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Chat functionality
        function toggleChat() {
            const chatWindow = document.getElementById('chatWindow');
            chatWindow.classList.toggle('open');
        }

        function handleChatKeyPress(event) {
            if (event.key === 'Enter') {
                sendChatMessage();
            }
        }

        function sendChatMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            addChatMessage(message, 'user');
            input.value = '';
            
            setTimeout(() => {
                showTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    const response = generateAIResponse(message);
                    addChatMessage(response, 'bot');
                }, 1500);
            }, 500);
        }

        function addChatMessage(text, sender) {
            const messagesContainer = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function showTypingIndicator() {
            const messagesContainer = document.getElementById('chatMessages');
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message bot';
            typingDiv.id = 'typingIndicator';
            typingDiv.innerHTML = `
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            `;
            messagesContainer.appendChild(typingDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function removeTypingIndicator() {
            const indicator = document.getElementById('typingIndicator');
            if (indicator) indicator.remove();
        }

        function generateAIResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
                return "Great question! I offer two options:\n\n1️⃣ Strategy Consultation ($45/30min): Complete Meta Ads audit, custom roadmap, and Q&A\n\n2️⃣ Ongoing Management ($20/hr): Full Meta Ads management with the 90-day system\n\nWhich sounds like a better fit?";
            }
            
            if (lowerMessage.includes('90 day') || lowerMessage.includes('why') || lowerMessage.includes('long')) {
                return "Excellent question! Here's why 90 days:\n\n🧠 Meta's AI needs 60-90 days to truly learn your audience\n📉 Most campaigns fail because they're killed at day 30\n📈 My data shows stable CPL/ROAS happens at 60-90 days\n\nI've earned $300K+ on Upwork using this exact approach. Want to see a case study?";
            }
            
            if (lowerMessage.includes('ecommerce') || lowerMessage.includes('store') || lowerMessage.includes('shopify')) {
                return "Absolutely! E-commerce is my specialty. Quick questions:\n\n• What's your current monthly revenue?\n• Are you running Facebook/Instagram ads now?\n• Can you commit to 90 days?\n\nThis helps me recommend the best approach for you.";
            }
            
            if (lowerMessage.includes('case study') || lowerMessage.includes('results') || lowerMessage.includes('proof')) {
                return "I'd love to share! Check out the Success Stories section below. My favorite:\n\n✨ E-commerce brand: 400% transaction increase, 45% lower CPC, 12x ROAS\n✨ Shopify store: 20x ROAS in 90 days\n\nWhich industry are you in?";
            }
            
            if (lowerMessage.includes('book') || lowerMessage.includes('call') || lowerMessage.includes('consultation')) {
                return "Perfect! Let's get you scheduled. The $45 strategy call includes:\n\n✓ Complete account audit\n✓ Custom 90-day roadmap\n✓ All your questions answered\n\nClick 'Book Strategy Call' above to choose your time!";
            }
            
            return "Thanks for your question! I specialize in:\n\n• 90-day Meta Ads optimization\n• E-commerce scaling\n• Lead generation\n• Course creator funnels\n\nWhat specific challenge are you facing with your ads?";
        }

        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Initialize on load
        window.addEventListener('load', () => {
            createParticles();
            createDataStream();
            animateCounters();
        });
    </script>
</body>
</html>
