// Admin Panel JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('content').classList.toggle('active');
    });
    
    // Page navigation
    const pageLinks = document.querySelectorAll('[data-page]');
    const pages = document.querySelectorAll('.page-content');
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target page
            const targetPage = this.getAttribute('data-page');
            
            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show the target page
            document.getElementById(`${targetPage}-page`).classList.add('active');
            
            // Update active state in sidebar
            document.querySelectorAll('#sidebar ul li').forEach(item => {
                item.classList.remove('active');
            });
            
            this.closest('li').classList.add('active');
            
            // Close the sidebar on mobile
            if (window.innerWidth < 768) {
                document.getElementById('sidebar').classList.add('active');
                document.getElementById('content').classList.remove('active');
            }
        });
    });
    
    // Logout functionality
    document.getElementById('logout').addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            alert('You have been logged out successfully.');
            window.location.href = '../index.html';
        }
    });
    
    document.getElementById('logout-dropdown').addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            alert('You have been logged out successfully.');
            window.location.href = '../index.html';
        }
    });
    
    // Initialize charts
    if (document.getElementById('trafficChart')) {
        const trafficCtx = document.getElementById('trafficChart').getContext('2d');
        const trafficChart = new Chart(trafficCtx, {
            type: 'line',
            data: {
                labels: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7'],
                datasets: [{
                    label: 'Page Views',
                    data: [120, 190, 150, 170, 180, 210, 230],
                    backgroundColor: 'rgba(0, 86, 179, 0.1)',
                    borderColor: 'rgba(0, 86, 179, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(0, 86, 179, 1)',
                    pointRadius: 4,
                    tension: 0.3
                }, {
                    label: 'Unique Visitors',
                    data: [80, 120, 100, 130, 140, 160, 150],
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    borderColor: 'rgba(40, 167, 69, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(40, 167, 69, 1)',
                    pointRadius: 4,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
    
    if (document.getElementById('analyticsTrafficChart')) {
        const analyticsTrafficCtx = document.getElementById('analyticsTrafficChart').getContext('2d');
        const analyticsTrafficChart = new Chart(analyticsTrafficCtx, {
            type: 'line',
            data: {
                labels: ['Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30', 'Apr 4', 'Apr 8'],
                datasets: [{
                    label: 'Page Views',
                    data: [1200, 1350, 1100, 1450, 1300, 1550, 1650],
                    backgroundColor: 'rgba(0, 86, 179, 0.1)',
                    borderColor: 'rgba(0, 86, 179, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(0, 86, 179, 1)',
                    pointRadius: 4,
                    tension: 0.3
                }, {
                    label: 'Unique Visitors',
                    data: [800, 950, 750, 1000, 900, 1100, 1200],
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    borderColor: 'rgba(40, 167, 69, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(40, 167, 69, 1)',
                    pointRadius: 4,
                    tension: 0.3
                }, {
                    label: 'Bounce Rate (%)',
                    data: [35, 32, 38, 30, 34, 31, 29],
                    backgroundColor: 'rgba(220, 53, 69, 0.1)',
                    borderColor: 'rgba(220, 53, 69, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(220, 53, 69, 1)',
                    pointRadius: 4,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
    
    if (document.getElementById('trafficSourcesChart')) {
        const trafficSourcesCtx = document.getElementById('trafficSourcesChart').getContext('2d');
        const trafficSourcesChart = new Chart(trafficSourcesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Organic Search', 'Direct', 'Referral', 'Social Media', 'Email', 'Other'],
                datasets: [{
                    data: [45, 25, 15, 10, 3, 2],
                    backgroundColor: [
                        'rgba(0, 86, 179, 0.8)',
                        'rgba(40, 167, 69, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(23, 162, 184, 0.8)',
                        'rgba(111, 66, 193, 0.8)',
                        'rgba(108, 117, 125, 0.8)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'right'
                }
            }
        });
    }
    
    if (document.getElementById('visitorDemographicsChart')) {
        const visitorDemographicsCtx = document.getElementById('visitorDemographicsChart').getContext('2d');
        const visitorDemographicsChart = new Chart(visitorDemographicsCtx, {
            type: 'bar',
            data: {
                labels: ['Europe', 'North America', 'Asia', 'Africa', 'South America', 'Oceania'],
                datasets: [{
                    label: 'Visitors by Region',
                    data: [35, 30, 20, 8, 5, 2],
                    backgroundColor: [
                        'rgba(0, 86, 179, 0.8)',
                        'rgba(40, 167, 69, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(220, 53, 69, 0.8)',
                        'rgba(23, 162, 184, 0.8)',
                        'rgba(108, 117, 125, 0.8)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }]
                }
            }
        });
    }
    
    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = form.querySelectorAll('input[required], textarea[required], select[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                alert('Changes saved successfully!');
                // In a real implementation, this would save the data to a server
            }
        });
    });
    
    // Initialize tooltips and popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    
    // Performance optimization
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
