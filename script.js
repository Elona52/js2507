// 블로그 인터랙티브 기능
document.addEventListener('DOMContentLoaded', function() {
    
    // 클릭 히스토리를 저장하는 배열
    let clickHistory = [];
    
    // 히스토리를 로컬 스토리지에서 불러오기
    const savedHistory = localStorage.getItem('clickHistory');
    if (savedHistory) {
        clickHistory = JSON.parse(savedHistory);
    }
    
    // 히스토리를 로컬 스토리지에 저장하는 함수
    function saveHistory() {
        localStorage.setItem('clickHistory', JSON.stringify(clickHistory));
    }
    
    // 히스토리에 항목 추가하는 함수
    function addToHistory(id, name, type) {
        // 기존 항목이 있으면 제거
        const existingIndex = clickHistory.findIndex(item => item.id === id);
        if (existingIndex !== -1) {
            clickHistory.splice(existingIndex, 1);
        }
        
        // 새 항목을 맨 앞에 추가
        clickHistory.unshift({
            id: id,
            name: name,
            type: type,
            timestamp: new Date().toISOString()
        });
        
        // 최대 5개까지만 유지
        if (clickHistory.length > 5) {
            clickHistory = clickHistory.slice(0, 5);
        }
        
        // 로컬 스토리지에 저장
        saveHistory();
        
        // 최근 학습 섹션 업데이트
        updateRecentPosts();
    }
    
    // 날짜 포맷팅 함수
    function formatDate(timestamp) {
        const now = new Date();
        const date = new Date(timestamp);
        const diffTime = now - date;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            return '오늘';
        } else if (diffDays === 1) {
            return '어제';
        } else if (diffDays < 7) {
            return `${diffDays}일 전`;
        } else {
            return `${date.getMonth() + 1}/${date.getDate()}`;
        }
    }
    
    // 최근 학습 섹션 업데이트 함수
    function updateRecentPosts() {
        const recentPostsContainer = document.querySelector('.recent-posts');
        if (!recentPostsContainer) return;
        
        // 기존 내용 제거
        recentPostsContainer.innerHTML = '';
        
        // 히스토리가 없으면 기본 데이터 표시
        const postsToShow = clickHistory.length > 0 ? clickHistory : [
            { id: 'js-basic', name: 'JavaScript 기초', type: 'session', timestamp: new Date(Date.now() - 86400000).toISOString() },
            { id: 'js-advanced', name: 'JavaScript 고급', type: 'session', timestamp: new Date(Date.now() - 172800000).toISOString() },
            { id: 'js-project', name: 'JavaScript 프로젝트', type: 'project', timestamp: new Date(Date.now() - 259200000).toISOString() }
        ];
        
        // 최근 학습 항목 생성
        postsToShow.forEach(post => {
            const postElement = document.createElement('a');
            postElement.href = '#';
            postElement.className = 'recent-post';
            postElement.innerHTML = `
                <span class="post-date">${formatDate(post.timestamp)}</span>
                <span class="post-title">${post.name}</span>
            `;
            
            // 클릭 이벤트 추가
            postElement.addEventListener('click', (e) => {
                e.preventDefault();
                // 해당 항목으로 이동하는 로직
                if (post.type === 'session') {
                    const sessionItem = document.querySelector(`[data-id="${post.id}"]`);
                    if (sessionItem) {
                        sessionItem.click();
                    }
                } else if (post.type === 'project') {
                    const projectCard = document.querySelector(`[data-id="${post.id}"]`);
                    if (projectCard) {
                        projectCard.click();
                    }
                }
            });
            
            recentPostsContainer.appendChild(postElement);
        });
    }
    
    // 네비게이션 활성화
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // 스크롤 시 네비게이션 활성화
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // 네비게이션 클릭 이벤트
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
         // 사이드바 항목 클릭 이벤트
     const sidebarItems = document.querySelectorAll('.sidebar-item');
     
     sidebarItems.forEach(item => {
         // 호버 효과
         item.addEventListener('mouseenter', () => {
             item.style.transform = 'translateX(8px)';
         });
         
         item.addEventListener('mouseleave', () => {
             item.style.transform = 'translateX(0)';
         });
         
         // 클릭 이벤트
         item.addEventListener('click', (e) => {
             e.preventDefault();
             const href = item.getAttribute('href');
             const title = item.querySelector('.item-title').textContent;
             const id = item.getAttribute('data-id') || href;
             
             // 히스토리에 추가
             addToHistory(id, title, 'sidebar');
             
             // 결과 표시
             showResult(href, title);
         });
     });
    
         // 프로젝트 카드 클릭 이벤트
     const projectCards = document.querySelectorAll('.project-card');
     
     projectCards.forEach(card => {
         // 호버 효과
         card.addEventListener('mouseenter', () => {
             card.style.transform = 'translateY(-8px)';
         });
         
         card.addEventListener('mouseleave', () => {
             card.style.transform = 'translateY(0)';
         });
         
         // 클릭 이벤트
         const projectLink = card.querySelector('.project-link');
         if (projectLink) {
             card.addEventListener('click', (e) => {
                 e.preventDefault();
                 const href = projectLink.getAttribute('href');
                 const title = card.querySelector('.project-title').textContent;
                 const id = card.getAttribute('data-id') || href;
                 
                 // 히스토리에 추가
                 addToHistory(id, title, 'project');
                 
                 // 결과 표시
                 showResult(href, title);
             });
         }
     });
    
         // 세션 아이템 클릭 이벤트
     const sessionItems = document.querySelectorAll('.session-item');
     
     sessionItems.forEach(item => {
         // 호버 효과
         item.addEventListener('mouseenter', () => {
             item.style.transform = 'translateX(8px)';
         });
         
         item.addEventListener('mouseleave', () => {
             item.style.transform = 'translateX(0)';
         });
         
         // 클릭 이벤트
         item.addEventListener('click', (e) => {
             e.preventDefault();
             const href = item.getAttribute('href');
             const title = item.querySelector('.session-name').textContent;
             const id = item.getAttribute('data-id') || href;
             
             // 히스토리에 추가
             addToHistory(id, title, 'session');
             
             // 결과 표시
             showResult(href, title);
         });
     });
    
    // 깃허브 사이트 링크 호버 효과
    const siteLinks = document.querySelectorAll('.site-link');
    
    siteLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateX(8px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateX(0)';
        });
    });
    
    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 애니메이션 대상 요소들
    const animatedElements = document.querySelectorAll('.session-category, .project-card, .welcome-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // 통계 카운터 애니메이션
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (target === 3 ? '' : '+');
        }, 30);
    };
    
    // 통계 섹션이 보일 때 카운터 시작
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numbers = entry.target.querySelectorAll('.stat-number');
                numbers.forEach(number => {
                    const target = parseInt(number.textContent.replace('+', ''));
                    animateCounter(number, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const welcomeCard = document.querySelector('.welcome-card');
    if (welcomeCard) {
        statsObserver.observe(welcomeCard);
    }
    
    // 다크 모드 토글 (선택사항)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #667eea;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(darkModeToggle);
    
    let isDarkMode = false;
    
    darkModeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '☀️';
            darkModeToggle.style.background = '#f59e0b';
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.innerHTML = '🌙';
            darkModeToggle.style.background = '#667eea';
        }
    });
    
    // 다크 모드 스타일
    const darkModeStyles = `
        .dark-mode {
            background: #0f172a !important;
            color: #e2e8f0 !important;
        }
        
        .dark-mode .sidebar-section,
        .dark-mode .session-category,
        .dark-mode .project-card,
        .dark-mode .profile-card {
            background: #1e293b !important;
            border-color: #334155 !important;
            color: #e2e8f0 !important;
        }
        
        .dark-mode .sidebar-title,
        .dark-mode .category-title,
        .dark-mode .project-title,
        .dark-mode .profile-name {
            color: #f1f5f9 !important;
        }
        
        .dark-mode .session-name,
        .dark-mode .project-desc {
            color: #94a3b8 !important;
        }
        
        .dark-mode .tag {
            background: #334155 !important;
            color: #e2e8f0 !important;
        }
        
        .dark-mode .session-date,
        .dark-mode .project-date {
            background: #334155 !important;
            color: #94a3b8 !important;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = darkModeStyles;
    document.head.appendChild(styleSheet);
    
             // 최근 학습 섹션 초기화
    updateRecentPosts();
    
    // 로딩 완료 메시지
    console.log('🎉 블로그가 성공적으로 로드되었습니다!');
    
    // 성능 모니터링
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`⚡ 페이지 로딩 시간: ${loadTime.toFixed(2)}ms`);
    });
 });

// 결과 표시 함수
function showResult(filePath, title) {
    const resultTitle = document.querySelector('.result-title');
    const resultFrame = document.getElementById('result-frame');
    
    // 제목 업데이트
    resultTitle.textContent = title;
    
    // iframe으로 파일 로드
    resultFrame.innerHTML = `<iframe src="${filePath}" width="100%" height="100%" frameborder="0"></iframe>`;
}
