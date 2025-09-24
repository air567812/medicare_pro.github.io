// Medical Diagnosis Application JavaScript
class MedicalDiagnosisApp {
    constructor() {
        this.selectedSymptoms = new Set();
        this.diseases = {
            "Common Cold": {
                "symptoms": ["runny nose", "congestion", "sneezing", "sore throat", "cough", "headache"],
                "description": "A viral infection of the upper respiratory tract that is usually harmless but can be uncomfortable.",
                "home_remedies": [
                    "Steam inhalation: Breathe steam from hot water to relieve congestion",
                    "Honey and lemon: Mix 2 tbsp honey with lemon juice in warm water",
                    "Ginger tea: Steep fresh ginger in hot water for 10-15 minutes",
                    "Garlic: Consume raw garlic or add to warm water",
                    "Rest: Get plenty of sleep to help your body fight the infection",
                    "Hydration: Drink plenty of fluids like water, herbal teas, and broths"
                ],
                "when_to_see_doctor": "If symptoms persist for more than 10 days, fever above 101.3°F, or difficulty breathing"
            },
            "Headache": {
                "symptoms": ["head pain", "pressure", "throbbing", "sensitivity to light", "nausea"],
                "description": "Pain in the head or upper neck, often caused by tension, dehydration, or other factors.",
                "home_remedies": [
                    "Peppermint oil: Apply diluted peppermint oil to temples",
                    "Cold compress: Apply ice pack to forehead for 15-20 minutes",
                    "Hydration: Drink plenty of water to combat dehydration",
                    "Magnesium: Take magnesium supplement or eat magnesium-rich foods",
                    "Rest in dark room: Avoid bright lights and loud noises",
                    "Gentle massage: Massage temples, neck, and shoulders"
                ],
                "when_to_see_doctor": "If headache is severe, sudden, or accompanied by fever, stiff neck, or vision changes"
            },
            "Fever": {
                "symptoms": ["elevated temperature", "chills", "sweating", "body aches", "fatigue"],
                "description": "Elevated body temperature, usually a sign that the body is fighting an infection.",
                "home_remedies": [
                    "Cold compress: Apply to wrists and forehead to help cool the body",
                    "Hydration: Drink plenty of fluids like water, herbal tea, or clear broths",
                    "Rest: Stay in bed and avoid physical activity",
                    "Light clothing: Wear minimal, breathable clothing",
                    "Cool bath: Take a lukewarm (not cold) bath to reduce body temperature",
                    "Willow bark tea: Natural anti-inflammatory properties"
                ],
                "when_to_see_doctor": "If fever is above 103°F (39.4°C), persists for more than 3 days, or accompanied by severe symptoms"
            },
            "Sore Throat": {
                "symptoms": ["throat pain", "difficulty swallowing", "scratchiness", "hoarseness"],
                "description": "Painful, scratchy feeling in the throat, often the first sign of a cold or bacterial infection.",
                "home_remedies": [
                    "Salt water gargle: Mix 1/2 tsp salt in warm water and gargle",
                    "Turmeric gargle: Mix 1/2 tsp turmeric and 1/2 tsp salt in warm water",
                    "Honey: Take 1-2 tablespoons of raw honey or mix with warm water",
                    "Ginger tea: Steep fresh ginger in hot water with honey",
                    "Chamomile tea: Anti-inflammatory properties help soothe throat",
                    "Steam inhalation: Breathe in steam from hot water with eucalyptus oil"
                ],
                "when_to_see_doctor": "If sore throat persists for more than a week, accompanied by high fever, or difficulty breathing"
            },
            "Indigestion": {
                "symptoms": ["stomach discomfort", "bloating", "nausea", "heartburn", "gas"],
                "description": "Discomfort in the upper abdomen, often caused by eating too much or too quickly.",
                "home_remedies": [
                    "Ginger tea: Natural digestive aid that reduces nausea",
                    "Fennel seeds: Chew 1 tsp after meals to aid digestion",
                    "Chamomile tea: Soothes the digestive system",
                    "Apple cider vinegar: Mix 1 tbsp in water before meals",
                    "Peppermint tea: Relaxes digestive muscles and reduces gas",
                    "Baking soda: Mix 1/2 tsp in water for quick heartburn relief"
                ],
                "when_to_see_doctor": "If symptoms persist for more than 2 weeks, severe pain, or blood in vomit/stool"
            },
            "Insomnia": {
                "symptoms": ["difficulty falling asleep", "frequent awakening", "daytime fatigue", "irritability"],
                "description": "Difficulty falling asleep or staying asleep, leading to daytime fatigue and poor concentration.",
                "home_remedies": [
                    "Chamomile tea: Drink 1 hour before bedtime for relaxation",
                    "Lavender aromatherapy: Use lavender essential oil or dried flowers",
                    "Warm milk: Contains tryptophan which promotes sleep",
                    "Sleep hygiene: Keep bedroom cool, dark, and quiet",
                    "Meditation: Practice deep breathing or mindfulness exercises",
                    "Avoid screens: No electronic devices 1 hour before bed"
                ],
                "when_to_see_doctor": "If insomnia persists for more than 3 weeks or significantly affects daily functioning"
            },
            "Muscle Pain": {
                "symptoms": ["muscle soreness", "stiffness", "tenderness", "reduced range of motion"],
                "description": "Discomfort or pain in muscle tissue, often from overuse, strain, or tension.",
                "home_remedies": [
                    "Turmeric paste: Mix turmeric powder with water for anti-inflammatory effect",
                    "Hot/cold therapy: Alternate between heat pack and ice pack",
                    "Epsom salt bath: Soak in warm bath with 1-2 cups Epsom salt",
                    "Gentle massage: Use coconut oil or almond oil for massage",
                    "Ginger compress: Apply warm ginger paste to affected area",
                    "Rest: Avoid strenuous activities until pain subsides"
                ],
                "when_to_see_doctor": "If pain is severe, persists for more than a week, or accompanied by swelling/numbness"
            }
        };
        
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bindEvents());
        } else {
            this.bindEvents();
        }
    }

    bindEvents() {
        console.log('Binding events...'); // Debug log
        
        // Common symptoms dropdown
        const commonSymptomsSelect = document.getElementById('common-symptoms');
        if (commonSymptomsSelect) {
            console.log('Dropdown found, adding listener'); // Debug log
            commonSymptomsSelect.addEventListener('change', (e) => {
                console.log('Dropdown changed:', e.target.value); // Debug log
                this.handleSymptomSelect(e);
            });
            
            // Also add click listener to ensure it's responsive
            commonSymptomsSelect.addEventListener('click', (e) => {
                console.log('Dropdown clicked'); // Debug log
            });
        } else {
            console.error('Dropdown not found!');
        }

        // Analyze button
        const analyzeBtn = document.getElementById('analyze-btn');
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => {
                console.log('Analyze button clicked'); // Debug log
                this.analyzeSymptoms();
            });
        }

        // Modal events
        const modal = document.getElementById('disease-modal');
        const modalClose = document.getElementById('modal-close');
        const printBtn = document.getElementById('print-results');
        const newAnalysisBtn = document.getElementById('new-analysis');

        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal();
            });
        }
        
        if (printBtn) {
            printBtn.addEventListener('click', () => this.printResults());
        }
        
        if (newAnalysisBtn) {
            newAnalysisBtn.addEventListener('click', () => this.startNewAnalysis());
        }

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Initialize the UI
        this.updateSymptomTags();
        this.updateAnalyzeButton();
        
        console.log('All events bound successfully'); // Debug log
    }

    handleSymptomSelect(e) {
        const symptom = e.target.value.toLowerCase();
        console.log('Handling symptom select:', symptom); // Debug log
        
        if (symptom && !this.selectedSymptoms.has(symptom)) {
            this.selectedSymptoms.add(symptom);
            this.updateSymptomTags();
            this.updateAnalyzeButton();
            e.target.value = '';
            console.log('Symptom selected:', symptom);
            console.log('Current symptoms:', Array.from(this.selectedSymptoms));
        } else if (this.selectedSymptoms.has(symptom)) {
            alert('This symptom is already selected.');
            e.target.value = '';
        }
    }

    updateSymptomTags() {
        const tagsContainer = document.getElementById('symptom-tags');
        if (!tagsContainer) {
            console.error('Tags container not found!');
            return;
        }
        
        console.log('Updating symptom tags, current symptoms:', Array.from(this.selectedSymptoms)); // Debug log
        
        tagsContainer.innerHTML = '';

        if (this.selectedSymptoms.size === 0) {
            tagsContainer.innerHTML = '<span style="color: #666; font-style: italic;">No symptoms selected yet</span>';
            return;
        }

        this.selectedSymptoms.forEach(symptom => {
            const tag = document.createElement('div');
            tag.className = 'symptom-tag';
            tag.innerHTML = `
                <span>${this.capitalizeWords(symptom)}</span>
                <button class="symptom-tag__remove" data-symptom="${symptom}">&times;</button>
            `;
            
            const removeBtn = tag.querySelector('.symptom-tag__remove');
            removeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Removing symptom:', symptom);
                this.removeSymptom(symptom);
            });
            
            tagsContainer.appendChild(tag);
        });
    }

    removeSymptom(symptom) {
        console.log('Removing symptom:', symptom); // Debug log
        this.selectedSymptoms.delete(symptom);
        this.updateSymptomTags();
        this.updateAnalyzeButton();
    }

    updateAnalyzeButton() {
        const analyzeBtn = document.getElementById('analyze-btn');
        if (!analyzeBtn) {
            console.error('Analyze button not found!');
            return;
        }
        
        const hasSymptoms = this.selectedSymptoms.size > 0;
        
        analyzeBtn.disabled = !hasSymptoms;
        analyzeBtn.textContent = hasSymptoms 
            ? `Analyze ${this.selectedSymptoms.size} Symptom${this.selectedSymptoms.size !== 1 ? 's' : ''}`
            : 'Select symptoms to analyze';
            
        console.log('Analyze button updated, enabled:', hasSymptoms); // Debug log
    }

    analyzeSymptoms() {
        console.log('Analyzing symptoms:', Array.from(this.selectedSymptoms)); // Debug log
        
        if (this.selectedSymptoms.size === 0) {
            alert('Please select at least one symptom before analyzing.');
            return;
        }
        
        const matches = this.findDiseaseMatches();
        console.log('Disease matches found:', matches); // Debug log
        this.displayResults(matches);
        
        // Scroll to results
        const resultsSection = document.getElementById('disease-results');
        if (resultsSection) {
            resultsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    findDiseaseMatches() {
        const matches = [];
        const selectedSymptomsArray = Array.from(this.selectedSymptoms);
        
        console.log('Finding matches for symptoms:', selectedSymptomsArray); // Debug log

        Object.entries(this.diseases).forEach(([diseaseName, diseaseData]) => {
            const matchingSymptoms = diseaseData.symptoms.filter(symptom => {
                return selectedSymptomsArray.some(selected => {
                    const normalizedSelected = selected.toLowerCase().trim();
                    const normalizedSymptom = symptom.toLowerCase().trim();
                    return normalizedSelected.includes(normalizedSymptom) || 
                           normalizedSymptom.includes(normalizedSelected) ||
                           normalizedSelected === normalizedSymptom;
                });
            });

            if (matchingSymptoms.length > 0) {
                const matchPercentage = Math.round((matchingSymptoms.length / diseaseData.symptoms.length) * 100);
                matches.push({
                    name: diseaseName,
                    data: diseaseData,
                    matchingSymptoms,
                    matchPercentage,
                    matchScore: matchingSymptoms.length
                });
            }
        });

        // Sort by match score (number of matching symptoms) descending
        return matches.sort((a, b) => b.matchScore - a.matchScore);
    }

    displayResults(matches) {
        const resultsSection = document.getElementById('disease-results');
        const diseaseList = document.getElementById('disease-list');
        
        if (!resultsSection || !diseaseList) {
            console.error('Results section or disease list not found!');
            return;
        }

        console.log('Displaying results for', matches.length, 'matches'); // Debug log

        if (matches.length === 0) {
            diseaseList.innerHTML = `
                <div class="card">
                    <div class="card__body">
                        <h4>No Matching Diseases Found</h4>
                        <p>We couldn't find any diseases that match your selected symptoms. Please try selecting different symptoms or consult with a healthcare professional.</p>
                        <p><strong>Selected symptoms:</strong> ${Array.from(this.selectedSymptoms).map(s => this.capitalizeWords(s)).join(', ')}</p>
                    </div>
                </div>
            `;
        } else {
            diseaseList.innerHTML = matches.map(match => `
                <div class="disease-card" data-disease="${match.name}">
                    <div class="disease-card__header">
                        <h3 class="disease-card__name">${match.name}</h3>
                        <span class="match-score">${match.matchScore}/${match.data.symptoms.length} symptoms match</span>
                    </div>
                    <p class="disease-card__description">${match.data.description}</p>
                    <div class="disease-card__symptoms">
                        ${match.matchingSymptoms.map(symptom => 
                            `<span class="matched-symptom">${this.capitalizeWords(symptom)}</span>`
                        ).join('')}
                    </div>
                </div>
            `).join('');

            // Add click handlers to disease cards
            diseaseList.querySelectorAll('.disease-card').forEach(card => {
                card.addEventListener('click', () => {
                    const diseaseName = card.dataset.disease;
                    const diseaseMatch = matches.find(match => match.name === diseaseName);
                    console.log('Disease card clicked:', diseaseName); // Debug log
                    this.showDiseaseDetails(diseaseMatch);
                });
            });
        }

        resultsSection.classList.remove('hidden');
    }

    showDiseaseDetails(diseaseMatch) {
        console.log('Showing disease details for:', diseaseMatch.name); // Debug log
        
        const modal = document.getElementById('disease-modal');
        const modalDiseaseName = document.getElementById('modal-disease-name');
        const modalDescription = document.getElementById('modal-description');
        const modalSymptoms = document.getElementById('modal-symptoms');
        const modalRemedies = document.getElementById('modal-remedies');
        const modalDoctorAdvice = document.getElementById('modal-doctor-advice');

        if (!modal) {
            console.error('Modal not found!');
            return;
        }

        modalDiseaseName.textContent = diseaseMatch.name;
        modalDescription.textContent = diseaseMatch.data.description;
        
        modalSymptoms.innerHTML = diseaseMatch.matchingSymptoms
            .map(symptom => `<li>${this.capitalizeWords(symptom)}</li>`)
            .join('');

        modalRemedies.innerHTML = diseaseMatch.data.home_remedies
            .map(remedy => `<li>${remedy}</li>`)
            .join('');

        modalDoctorAdvice.textContent = diseaseMatch.data.when_to_see_doctor;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('disease-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    printResults() {
        window.print();
    }

    startNewAnalysis() {
        console.log('Starting new analysis'); // Debug log
        this.selectedSymptoms.clear();
        this.updateSymptomTags();
        this.updateAnalyzeButton();
        
        const resultsSection = document.getElementById('disease-results');
        if (resultsSection) {
            resultsSection.classList.add('hidden');
        }
        
        this.closeModal();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Focus on dropdown
        const dropdown = document.getElementById('common-symptoms');
        if (dropdown) {
            setTimeout(() => dropdown.focus(), 300);
        }
    }

    capitalizeWords(str) {
        return str.replace(/\b\w/g, l => l.toUpperCase());
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...'); // Debug log
    const app = new MedicalDiagnosisApp();
    
    // Make app globally available for debugging
    window.medicalApp = app;
});

console.log('Script loaded'); // Debug log