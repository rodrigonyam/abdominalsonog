// Abdominal Sonography Quiz Application
class AbdominalSonographyQuiz {
    constructor() {
        this.currentQuestionIndex = 0;
        this.currentCategory = 'all';
        this.userAnswers = {};
        this.submittedAnswers = {};
        this.score = 0;
        this.questionsAnswered = 0;
        this.startTime = null;
        this.endTime = null;
        this.sessionStats = {
            totalSessions: 0,
            bestScore: 0,
            averageScore: 0,
            timeSpent: 0,
            categoryPerformance: {},
            streakCount: 0,
            lastSessionDate: null
        };
        this.questionHistory = [];
        this.loadProgressData();
        
        // Combine all anatomical sections into a single array with section labels
        this.allQuestions = this.combineAnatomicalSections();
        this.filteredQuestions = [...this.allQuestions];
        
        this.initializeEventListeners();
        this.loadQuestion();
        this.updateProgress();
        this.startSessionTimer();
    }
    
    startSessionTimer() {
        this.sessionTimer = setInterval(() => {
            if (this.startTime) {
                const elapsed = Math.floor((new Date() - this.startTime) / 1000);
                const minutes = Math.floor(elapsed / 60);
                const seconds = elapsed % 60;
                document.getElementById('sessionTime').textContent = 
                    `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }
    
    loadProgressData() {
        const savedData = localStorage.getItem('abdomenSonographyProgress');
        if (savedData) {
            this.sessionStats = { ...this.sessionStats, ...JSON.parse(savedData) };
        }
        this.updateProgressDisplay();
    }

    saveProgressData() {
        localStorage.setItem('abdomenSonographyProgress', JSON.stringify(this.sessionStats));
    }

    updateProgressDisplay() {
        const progressInfo = document.querySelector('.progress-info');
        if (progressInfo && this.sessionStats.totalSessions > 0) {
            const avgElement = document.createElement('div');
            avgElement.className = 'session-stats';
            avgElement.innerHTML = `
                <small>Sessions: ${this.sessionStats.totalSessions} | Best: ${this.sessionStats.bestScore}% | Avg: ${this.sessionStats.averageScore}%</small>
            `;
            if (!document.querySelector('.session-stats')) {
                progressInfo.appendChild(avgElement);
            }
        }
    }

    combineQuestions() {
        const combined = [];
        let questionId = 1;
        
        // Define anatomical sections with display names
        const sections = {
            liver: 'Liver',
            gallbladder: 'Gallbladder & Biliary',
            kidney: 'Kidney & Urinary',
            pancreas: 'Pancreas',
            spleen: 'Spleen',
            vascular: 'Abdominal Vascular',
            adrenal: 'Adrenal Glands',
            gastrointestinal: 'Gastrointestinal',
            retroperitoneum: 'Retroperitoneum',
            abdominalWall: 'Abdominal Wall'
        };
        
        // Combine all anatomical sections
        Object.keys(sections).forEach(sectionKey => {
            if (questionDatabase[sectionKey]) {
                questionDatabase[sectionKey].forEach(q => {
                    let processedQuestion = {
                        ...q,
                        id: questionId++,
                        anatomicalSection: sections[sectionKey],
                        sectionKey: sectionKey,
                        category: sections[sectionKey]
                    };
                    
                    // Handle different question types
                    if (q.type === 'trueFalse') {
                        processedQuestion.type = 'true-false';
                        processedQuestion.options = ['True', 'False'];
                        processedQuestion.category = sections[sectionKey];
                    } else if (q.type === 'shortAnswer') {
                        processedQuestion.type = 'short-answer';
                        processedQuestion.category = sections[sectionKey];
                    } else if (q.type === 'multipleChoice') {
                        processedQuestion.type = 'multiple-choice';
                        processedQuestion.category = sections[sectionKey];
                    }
                    
                    combined.push(processedQuestion);
                });
            }
        });
        
        return combined;
    }
    
    initializeEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterByCategory(e.target.dataset.category));
        });
        
        // Control buttons
        document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submitBtn').addEventListener('click', () => this.submitAnswer());
        document.getElementById('finishBtn').addEventListener('click', () => this.finishQuiz());
        document.getElementById('restartBtn').addEventListener('click', () => this.restartQuiz());
        
        // Floating action buttons
        document.getElementById('quickStatsBtn').addEventListener('click', () => this.showQuickStats());
        document.getElementById('bookmarkBtn').addEventListener('click', () => this.bookmarkQuestion());
        document.getElementById('scrollTopBtn').addEventListener('click', () => this.scrollToTop());
        document.getElementById('closeStatsModal').addEventListener('click', () => this.closeQuickStats());
    }
    
    filterByCategory(category) {
        this.currentCategory = category;
        
        // Handle sources section
        if (category === 'sources') {
            this.showSources();
            return;
        }
        
        // Hide sources section if visible
        document.getElementById('sourcesSection').classList.add('hidden');
        document.getElementById('questionContainer').classList.remove('hidden');
        document.querySelector('.quiz-controls').classList.remove('hidden');
        
        if (category === 'all') {
            this.filteredQuestions = [...this.allQuestions];
        } else {
            this.filteredQuestions = this.allQuestions.filter(q => q.category === category);
        }
        
        // Reset to first question of filtered category
        this.currentQuestionIndex = 0;
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.loadQuestion();
        this.updateProgress();
    }
    
    showSources() {
        // Hide quiz sections
        document.getElementById('questionContainer').classList.add('hidden');
        document.querySelector('.quiz-controls').classList.add('hidden');
        document.getElementById('resultsSection').classList.add('hidden');
        
        // Show sources section
        document.getElementById('sourcesSection').classList.remove('hidden');
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-category="sources"]').classList.add('active');
        
        // Scroll to sources
        document.getElementById('sourcesSection').scrollIntoView({ behavior: 'smooth' });
    }
    
    showQuickStats() {
        const modal = document.getElementById('quickStatsModal');
        const content = document.getElementById('quickStatsContent');
        
        const totalQuestions = this.allQuestions.length;
        const answeredQuestions = Object.keys(this.submittedAnswers).length;
        const correctAnswers = this.score;
        const accuracy = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;
        
        const categoryStats = {};
        ['multiple-choice', 'true-false', 'short-answer', 'diagram'].forEach(category => {
            const categoryQuestions = this.allQuestions.filter(q => q.category === category);
            const answered = categoryQuestions.filter(q => this.submittedAnswers[q.id] !== undefined).length;
            const correct = categoryQuestions.filter(q => {
                const userAnswer = this.userAnswers[q.id];
                return this.submittedAnswers[q.id] !== undefined && this.isAnswerCorrect(q, userAnswer);
            }).length;
            
            categoryStats[category] = {
                total: categoryQuestions.length,
                answered,
                correct,
                accuracy: answered > 0 ? Math.round((correct / answered) * 100) : 0
            };
        });
        
        content.innerHTML = `
            <div class="quick-stats">
                <div class="stat-row">
                    <span class="stat-label">Progress:</span>
                    <span class="stat-value">${answeredQuestions}/${totalQuestions} (${Math.round((answeredQuestions/totalQuestions)*100)}%)</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Overall Accuracy:</span>
                    <span class="stat-value ${accuracy >= 80 ? 'high' : accuracy >= 60 ? 'medium' : 'low'}">${accuracy}%</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Current Streak:</span>
                    <span class="stat-value">${this.sessionStats.streakCount}</span>
                </div>
                <div class="category-stats">
                    <h4>Category Breakdown:</h4>
                    ${Object.entries(categoryStats).map(([category, stats]) => `
                        <div class="category-stat">
                            <span class="category-name">${this.formatQuestionType(category)}:</span>
                            <span class="category-progress">${stats.correct}/${stats.answered} (${stats.accuracy}%)</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
    }
    
    closeQuickStats() {
        document.getElementById('quickStatsModal').classList.add('hidden');
    }
    
    bookmarkQuestion() {
        if (this.filteredQuestions.length === 0) return;
        
        const question = this.filteredQuestions[this.currentQuestionIndex];
        let bookmarks = JSON.parse(localStorage.getItem('bookmarkedQuestions') || '[]');
        
        if (bookmarks.includes(question.id)) {
            bookmarks = bookmarks.filter(id => id !== question.id);
            this.showNotification('Question removed from bookmarks', 'info');
        } else {
            bookmarks.push(question.id);
            this.showNotification('Question bookmarked!', 'success');
        }
        
        localStorage.setItem('bookmarkedQuestions', JSON.stringify(bookmarks));
        this.updateBookmarkButton();
    }
    
    updateBookmarkButton() {
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        if (this.filteredQuestions.length === 0) return;
        
        const question = this.filteredQuestions[this.currentQuestionIndex];
        const bookmarks = JSON.parse(localStorage.getItem('bookmarkedQuestions') || '[]');
        
        if (bookmarks.includes(question.id)) {
            bookmarkBtn.classList.add('bookmarked');
        } else {
            bookmarkBtn.classList.remove('bookmarked');
        }
    }
    
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    loadQuestion() {
        const question = this.filteredQuestions[this.currentQuestionIndex];
        if (!question) return;
        
        const container = document.getElementById('questionContainer');
        container.innerHTML = this.renderQuestion(question);
        
        // Restore user's previous answer if exists
        this.restoreAnswer(question);
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Update bookmark button state
        this.updateBookmarkButton();
        
        // Start timer on first question
        if (!this.startTime && this.currentQuestionIndex === 0) {
            this.startTime = new Date();
        }
    }
    
    renderQuestion(question) {
        let html = `
            <div class="question-card">
                <div class="question-type ${question.type}">${this.formatQuestionType(question.type)}</div>
                <div class="question-text">${question.question}</div>
        `;
        
        // Add diagram if present
        if (question.imagePath) {
            html += `<img src="${question.imagePath}" alt="Diagnostic Image" class="diagram-image" />`;
        }
        
        // Render answer options based on question type
        switch (question.type) {
            case 'multiple-choice':
                html += this.renderMultipleChoice(question);
                break;
            case 'true-false':
                html += this.renderTrueFalse(question);
                break;
            case 'short-answer':
                html += this.renderShortAnswer(question);
                break;
            case 'diagram':
                html += this.renderMultipleChoice(question); // Diagrams use MC format
                break;
        }
        
        html += '</div>';
        return html;
    }
    
    formatQuestionType(type) {
        const types = {
            'multiple-choice': 'Multiple Choice',
            'true-false': 'True / False',
            'short-answer': 'Short Answer',
            'diagram': 'Diagram Analysis'
        };
        return types[type] || type;
    }
    
    renderMultipleChoice(question) {
        let html = '<div class="answer-options">';
        
        question.options.forEach((option, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C, D
            html += `
                <div class="answer-option" data-index="${index}" onclick="selectAnswer(${index})">
                    <div class="option-letter">${letter}</div>
                    <div class="option-text">${option}</div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }
    
    renderTrueFalse(question) {
        return `
            <div class="answer-options true-false-options">
                <div class="answer-option" data-index="0" onclick="selectAnswer(0)">
                    <div class="option-letter">T</div>
                    <div class="option-text">True</div>
                </div>
                <div class="answer-option" data-index="1" onclick="selectAnswer(1)">
                    <div class="option-letter">F</div>
                    <div class="option-text">False</div>
                </div>
            </div>
        `;
    }
    
    renderShortAnswer(question) {
        return `
            <div class="answer-options">
                <textarea class="short-answer-input" 
                         placeholder="Type your answer here..." 
                         rows="4"
                         onchange="handleShortAnswer(this.value)"></textarea>
            </div>
        `;
    }
    
    selectAnswer(answerIndex) {
        const question = this.filteredQuestions[this.currentQuestionIndex];
        
        // Don't allow selection if already submitted
        if (this.submittedAnswers[question.id] !== undefined) {
            return;
        }
        
        this.userAnswers[question.id] = answerIndex;
        
        // Update visual selection
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
        });
        document.querySelector(`[data-index="${answerIndex}"]`).classList.add('selected');
        
        // Enable submit button
        this.updateNavigationButtons();
    }
    
    handleShortAnswer(answer) {
        const question = this.filteredQuestions[this.currentQuestionIndex];
        
        // Don't allow changes if already submitted
        if (this.submittedAnswers[question.id] !== undefined) {
            return;
        }
        
        this.userAnswers[question.id] = answer.toLowerCase().trim();
        this.updateNavigationButtons();
    }
    
    restoreAnswer(question) {
        const savedAnswer = this.userAnswers[question.id];
        const isSubmitted = this.submittedAnswers[question.id] !== undefined;
        
        if (savedAnswer === undefined) return;
        
        if (question.type === 'short-answer') {
            const textarea = document.querySelector('.short-answer-input');
            if (textarea) {
                textarea.value = savedAnswer;
                if (isSubmitted) {
                    const isCorrect = this.isAnswerCorrect(question, savedAnswer);
                    textarea.style.borderColor = isCorrect ? '#27ae60' : '#e74c3c';
                    textarea.style.backgroundColor = isCorrect ? '#e8f5e8' : '#fdf2f2';
                    textarea.disabled = true;
                    this.showExplanation(question, isCorrect);
                }
            }
        } else {
            if (isSubmitted) {
                // Show the submitted state with feedback
                this.showAnswerFeedback(question, savedAnswer);
            } else {
                // Just show selection
                const option = document.querySelector(`[data-index="${savedAnswer}"]`);
                if (option) option.classList.add('selected');
            }
        }
    }
    
    finishQuiz() {
        this.endTime = new Date();
        this.showResults();
    }
    
    updateScore() {
        let correct = 0;
        let answered = 0;
        const categoryScores = {
            'multiple-choice': { correct: 0, total: 0 },
            'true-false': { correct: 0, total: 0 },
            'short-answer': { correct: 0, total: 0 },
            'diagram': { correct: 0, total: 0 }
        };
        
        this.allQuestions.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            const isSubmitted = this.submittedAnswers[question.id] !== undefined;
            if (userAnswer !== undefined && userAnswer !== '' && isSubmitted) {
                answered++;
                categoryScores[question.category].total++;
                if (this.isAnswerCorrect(question, userAnswer)) {
                    correct++;
                    categoryScores[question.category].correct++;
                }
                
                // Track question history for analytics
                const historyEntry = {
                    questionId: question.id,
                    category: question.category,
                    correct: this.isAnswerCorrect(question, userAnswer),
                    timestamp: new Date().toISOString()
                };
                
                // Update or add to history
                const existingIndex = this.questionHistory.findIndex(h => h.questionId === question.id);
                if (existingIndex !== -1) {
                    this.questionHistory[existingIndex] = historyEntry;
                } else {
                    this.questionHistory.push(historyEntry);
                }
            }
        });
        
        this.score = correct;
        this.questionsAnswered = answered;
        this.categoryScores = categoryScores;
        
        document.getElementById('currentScore').textContent = correct;
        document.getElementById('questionsAnswered').textContent = answered;
        
        // Update accuracy display
        const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
        document.getElementById('accuracyPercentage').textContent = `${accuracy}%`;
        
        // Update accuracy indicator
        const indicator = document.getElementById('accuracyIndicator');
        indicator.className = `accuracy-indicator ${accuracy >= 80 ? 'accuracy-high' : accuracy >= 60 ? 'accuracy-medium' : 'accuracy-low'}`;
        
        // Update streak counter display
        document.getElementById('streakCounter').textContent = this.sessionStats.streakCount;
        
        // Update live category performance indicators
        this.updateCategoryIndicators();
    }

    updateCategoryIndicators() {
        Object.keys(this.categoryScores).forEach(category => {
            const score = this.categoryScores[category];
            const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
            const tabBtn = document.querySelector(`[data-category="${category}"]`);
            
            if (tabBtn && score.total > 0) {
                let indicator = tabBtn.querySelector('.category-indicator');
                if (!indicator) {
                    indicator = document.createElement('span');
                    indicator.className = 'category-indicator';
                    tabBtn.appendChild(indicator);
                }
                indicator.textContent = `(${percentage}%)`;
                indicator.style.color = percentage >= 70 ? '#27ae60' : percentage >= 50 ? '#f39c12' : '#e74c3c';
            }
        });
    }
    
    isAnswerCorrect(question, userAnswer) {
        if (question.type === 'short-answer') {
            return question.correctAnswers.some(correctAnswer => 
                correctAnswer.toLowerCase().includes(userAnswer.toLowerCase()) ||
                userAnswer.toLowerCase().includes(correctAnswer.toLowerCase())
            );
        } else if (question.type === 'true-false') {
            const userBool = userAnswer === 0; // 0 = true, 1 = false
            return userBool === question.correct;
        } else {
            return userAnswer === question.correct;
        }
    }
    
    updateProgress() {
        const currentNum = this.currentQuestionIndex + 1;
        const total = this.filteredQuestions.length;
        const percentage = (currentNum / total) * 100;
        
        document.getElementById('currentQuestionNum').textContent = currentNum;
        document.getElementById('totalQuestions').textContent = total;
        document.getElementById('progressFill').style.width = `${percentage}%`;
    }
    
    submitAnswer() {
        const question = this.filteredQuestions[this.currentQuestionIndex];
        const userAnswer = this.userAnswers[question.id];
        
        // Check if answer exists
        if (userAnswer === undefined || userAnswer === '') {
            alert('Please select an answer before submitting.');
            return;
        }
        
        // Mark as submitted
        this.submittedAnswers[question.id] = userAnswer;
        
        // Show correct/incorrect feedback
        this.showAnswerFeedback(question, userAnswer);
        
        // Update score
        this.updateScore();
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }
    
    showAnswerFeedback(question, userAnswer) {
        const isCorrect = this.isAnswerCorrect(question, userAnswer);
        
        if (question.type === 'short-answer') {
            const textarea = document.querySelector('.short-answer-input');
            if (textarea) {
                textarea.style.borderColor = isCorrect ? '#27ae60' : '#e74c3c';
                textarea.style.backgroundColor = isCorrect ? '#e8f5e8' : '#fdf2f2';
                textarea.disabled = true;
            }
        } else {
            // Show feedback for multiple choice, true/false, and diagram questions
            document.querySelectorAll('.answer-option').forEach((option, index) => {
                const optionIndex = parseInt(option.dataset.index);
                
                if (optionIndex === question.correct) {
                    // Mark correct answer in green
                    option.classList.add('correct');
                    option.classList.remove('selected');
                } else if (optionIndex === userAnswer && !isCorrect) {
                    // Mark user's incorrect answer in red
                    option.classList.add('incorrect');
                    option.classList.remove('selected');
                }
                
                // Disable further clicking
                option.style.pointerEvents = 'none';
            });
        }
        
        // Show explanation if available
        this.showExplanation(question, isCorrect);
    }
    
    showExplanation(question, isCorrect) {
        let explanationDiv = document.querySelector('.answer-explanation');
        if (!explanationDiv) {
            explanationDiv = document.createElement('div');
            explanationDiv.className = 'answer-explanation';
            document.querySelector('.question-card').appendChild(explanationDiv);
        }
        
        const resultIcon = isCorrect ? '✓' : '✗';
        const resultClass = isCorrect ? 'correct' : 'incorrect';
        const resultText = isCorrect ? 'Correct!' : 'Incorrect';
        
        let explanationContent = `
            <div class="result-indicator ${resultClass}">
                <span class="result-icon">${resultIcon}</span>
                <span class="result-text">${resultText}</span>
            </div>
        `;
        
        if (question.explanation) {
            explanationContent += `<div class="explanation-text">${question.explanation}</div>`;
        }
        
        if (!isCorrect && question.type !== 'short-answer') {
            const correctAnswerText = question.type === 'true-false' ? 
                (question.correct ? 'True' : 'False') : 
                question.options[question.correct];
            explanationContent += `<div class="correct-answer">Correct answer: ${correctAnswerText}</div>`;
        }
        
        explanationDiv.innerHTML = explanationContent;
        explanationDiv.style.display = 'block';
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        const finishBtn = document.getElementById('finishBtn');
        
        const question = this.filteredQuestions[this.currentQuestionIndex];
        const hasAnswer = this.userAnswers[question.id] !== undefined && this.userAnswers[question.id] !== '';
        const isSubmitted = this.submittedAnswers[question.id] !== undefined;
        
        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        if (isSubmitted) {
            // Answer has been submitted, show next or finish
            submitBtn.classList.add('hidden');
            if (this.currentQuestionIndex === this.filteredQuestions.length - 1) {
                nextBtn.classList.add('hidden');
                finishBtn.classList.remove('hidden');
            } else {
                nextBtn.classList.remove('hidden');
                finishBtn.classList.add('hidden');
            }
        } else {
            // Answer not submitted yet
            nextBtn.classList.add('hidden');
            finishBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
            submitBtn.disabled = !hasAnswer;
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
            this.updateProgress();
        }
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.filteredQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
            this.updateProgress();
        }
    }
    
    submitQuiz() {
        this.endTime = new Date();
        this.showResults();
    }
    
    showResults() {
        this.endTime = new Date();
        const sessionDuration = Math.round((this.endTime - this.startTime) / 1000 / 60); // minutes
        
        document.getElementById('questionContainer').classList.add('hidden');
        document.querySelector('.quiz-controls').classList.add('hidden');
        
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.classList.remove('hidden');
        
        // Calculate comprehensive statistics
        const totalQuestions = this.questionsAnswered;
        const percentage = totalQuestions > 0 ? Math.round((this.score / totalQuestions) * 100) : 0;
        
        // Update session statistics
        this.sessionStats.totalSessions++;
        this.sessionStats.timeSpent += sessionDuration;
        this.sessionStats.lastSessionDate = new Date().toISOString();
        
        if (percentage > this.sessionStats.bestScore) {
            this.sessionStats.bestScore = percentage;
        }
        
        // Calculate running average
        const totalPercentage = (this.sessionStats.averageScore * (this.sessionStats.totalSessions - 1)) + percentage;
        this.sessionStats.averageScore = Math.round(totalPercentage / this.sessionStats.totalSessions);
        
        // Update streak
        if (percentage >= 70) {
            this.sessionStats.streakCount++;
        } else {
            this.sessionStats.streakCount = 0;
        }
        
        // Save progress
        this.saveProgressData();
        
        document.getElementById('finalScore').textContent = `${this.score}/${totalQuestions}`;
        document.getElementById('percentageScore').textContent = `${percentage}%`;
        document.getElementById('totalAnswered').textContent = totalQuestions;
        
        // Add session performance details
        this.addSessionDetails(sessionDuration, percentage);
        
        // Show category breakdown
        this.showCategoryBreakdown();
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    addSessionDetails(duration, percentage) {
        const resultsCard = document.querySelector('.results-card');
        let sessionDetails = document.querySelector('.session-details');
        
        if (!sessionDetails) {
            sessionDetails = document.createElement('div');
            sessionDetails.className = 'session-details';
            resultsCard.insertBefore(sessionDetails, document.querySelector('.category-breakdown'));
        }
        
        const performanceLevel = percentage >= 90 ? 'Excellent!' : 
                               percentage >= 80 ? 'Very Good!' : 
                               percentage >= 70 ? 'Good!' : 
                               percentage >= 60 ? 'Fair' : 'Needs Improvement';
        
        const performanceColor = percentage >= 90 ? '#27ae60' : 
                                percentage >= 80 ? '#2ecc71' : 
                                percentage >= 70 ? '#f39c12' : 
                                percentage >= 60 ? '#e67e22' : '#e74c3c';
        
        sessionDetails.innerHTML = `
            <h3>Session Performance</h3>
            <div class="performance-grid">
                <div class="perf-item">
                    <strong style="color: ${performanceColor}">${performanceLevel}</strong>
                    <small>Performance Level</small>
                </div>
                <div class="perf-item">
                    <strong>${duration} min</strong>
                    <small>Time Spent</small>
                </div>
                <div class="perf-item">
                    <strong>${this.sessionStats.streakCount}</strong>
                    <small>Current Streak</small>
                </div>
                <div class="perf-item">
                    <strong>${this.sessionStats.totalSessions}</strong>
                    <small>Total Sessions</small>
                </div>
            </div>
        `;
    }
    
    showCategoryBreakdown() {
        const breakdown = document.getElementById('categoryBreakdown');
        const categories = ['multiple-choice', 'true-false', 'short-answer', 'diagram'];
        
        let html = '<h3>Category Performance</h3>';
        
        categories.forEach(category => {
            const categoryQuestions = this.allQuestions.filter(q => q.category === category);
            let correct = 0;
            let answered = 0;
            
            categoryQuestions.forEach(question => {
                const userAnswer = this.userAnswers[question.id];
                if (userAnswer !== undefined && userAnswer !== '') {
                    answered++;
                    if (this.isAnswerCorrect(question, userAnswer)) {
                        correct++;
                    }
                }
            });
            
            const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;
            const categoryName = this.formatQuestionType(category);
            
            html += `
                <div class="category-result">
                    <div class="category-name">
                        <i class="fas fa-${this.getCategoryIcon(category)}"></i>
                        ${categoryName}
                    </div>
                    <div class="category-score">${correct}/${answered} (${percentage}%)</div>
                </div>
            `;
        });
        
        breakdown.innerHTML = html;
    }
    
    getCategoryIcon(category) {
        const icons = {
            'multiple-choice': 'list-ul',
            'true-false': 'check-circle',
            'short-answer': 'edit',
            'diagram': 'image'
        };
        return icons[category] || 'question';
    }
    
    restartQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.submittedAnswers = {};
        this.score = 0;
        this.questionsAnswered = 0;
        this.startTime = null;
        this.endTime = null;
        
        // Clear existing timer
        if (this.sessionTimer) {
            clearInterval(this.sessionTimer);
        }
        
        // Reset to all questions
        this.filterByCategory('all');
        
        // Hide results and show quiz
        document.getElementById('resultsSection').classList.add('hidden');
        document.getElementById('questionContainer').classList.remove('hidden');
        document.querySelector('.quiz-controls').classList.remove('hidden');
        
        this.loadQuestion();
        this.updateProgress();
        this.updateScore();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Global functions that need to be accessible from HTML
function selectAnswer(index) {
    if (window.quiz) {
        window.quiz.selectAnswer(index);
    }
}

function handleShortAnswer(value) {
    if (window.quiz) {
        window.quiz.handleShortAnswer(value);
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.classList.add('loading');
    
    // Simulate loading time for better UX
    setTimeout(() => {
        window.quiz = new AbdominalSonographyQuiz();
        document.body.classList.remove('loading');
    }, 500);
});

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (!window.quiz) return;
    
    switch(event.key) {
        case 'ArrowLeft':
            event.preventDefault();
            window.quiz.previousQuestion();
            break;
        case 'ArrowRight':
            event.preventDefault();
            window.quiz.nextQuestion();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            event.preventDefault();
            const index = parseInt(event.key) - 1;
            const currentQuestion = window.quiz.filteredQuestions[window.quiz.currentQuestionIndex];
            if (currentQuestion && currentQuestion.options && index < currentQuestion.options.length) {
                selectAnswer(index);
            }
            break;
    }
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Quiz loaded in ${loadTime}ms`);
    });
}