/* ==========================================================================
   ANIME GLASSMORPHIC LOGIN & SIGNUP JAVASCRIPT
   Falling Sakura Petal Canvas, Password Recovery Flow & Privacy/Terms Modals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Falling Sakura Petals & Sparkle Canvas Physics Engine
  // ------------------------------------------------------------------------
  const canvas = document.getElementById('sakura-canvas');
  
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const petals = [];
    const petalCount = 35;

    class SakuraPetal {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -20;
        this.size = Math.random() * 8 + 6;
        this.speedY = Math.random() * 1.2 + 0.8;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.oscillation = Math.random() * Math.PI * 2;
        this.oscSpeed = Math.random() * 0.03 + 0.01;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.03;
        this.opacity = Math.random() * 0.6 + 0.4;
        
        const petalColors = ['#ffccd5', '#ffb3c6', '#ff85a1', '#ffa6c1'];
        this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
      }

      update() {
        this.oscillation += this.oscSpeed;
        this.x += this.speedX + Math.sin(this.oscillation) * 0.8;
        this.y += this.speedY;
        this.rotation += this.rotSpeed;

        if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, this.size / 3, 0, this.size);
        ctx.bezierCurveTo(this.size, this.size / 3, this.size / 2, -this.size / 2, 0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < petalCount; i++) {
      petals.push(new SakuraPetal());
    }

    function animateSakura() {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateSakura);
    }

    animateSakura();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }

  // ------------------------------------------------------------------------
  // 2. Tab Switcher (Login vs Sign Up)
  // ------------------------------------------------------------------------
  const tabLogin = document.getElementById('tab-login');
  const tabSignup = document.getElementById('tab-signup');
  const tabContainer = document.querySelector('.tab-switcher');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  
  const formTitle = document.getElementById('form-title');
  const formSubtitle = document.getElementById('form-subtitle');

  function switchTab(mode) {
    clearErrors();

    if (mode === 'login') {
      if (tabContainer) tabContainer.classList.remove('signup-active');
      if (tabLogin) {
        tabLogin.classList.add('active');
        tabLogin.setAttribute('aria-selected', 'true');
      }
      if (tabSignup) {
        tabSignup.classList.remove('active');
        tabSignup.setAttribute('aria-selected', 'false');
      }

      if (loginForm) loginForm.classList.add('active');
      if (signupForm) signupForm.classList.remove('active');

      if (formTitle) formTitle.textContent = 'Welcome Back';
      if (formSubtitle) formSubtitle.textContent = 'Step into the magical realm with your account';
    } else {
      if (tabContainer) tabContainer.classList.add('signup-active');
      if (tabSignup) {
        tabSignup.classList.add('active');
        tabSignup.setAttribute('aria-selected', 'true');
      }
      if (tabLogin) {
        tabLogin.classList.remove('active');
        tabLogin.setAttribute('aria-selected', 'false');
      }

      if (signupForm) signupForm.classList.add('active');
      if (loginForm) loginForm.classList.remove('active');

      if (formTitle) formTitle.textContent = 'Join the Magic';
      if (formSubtitle) formSubtitle.textContent = 'Create your account to start your magical adventure';
    }
  }

  if (tabLogin) tabLogin.addEventListener('click', () => switchTab('login'));
  if (tabSignup) tabSignup.addEventListener('click', () => switchTab('signup'));

  // ------------------------------------------------------------------------
  // 3. Password Visibility Toggle
  // ------------------------------------------------------------------------
  const togglePasswordBtns = document.querySelectorAll('.toggle-password');

  togglePasswordBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      const eyeOpen = btn.querySelector('.eye-open');
      const eyeClosed = btn.querySelector('.eye-closed');

      if (input) {
        if (input.type === 'password') {
          input.type = 'text';
          if (eyeOpen) eyeOpen.classList.add('hidden');
          if (eyeClosed) eyeClosed.classList.remove('hidden');
        } else {
          input.type = 'password';
          if (eyeOpen) eyeOpen.classList.remove('hidden');
          if (eyeClosed) eyeClosed.classList.add('hidden');
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 4. Form Validation & Simulated Network Call
  // ------------------------------------------------------------------------
  function setError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
      errorEl.textContent = message;
    }
  }

  function clearErrors() {
    const errorEls = document.querySelectorAll('.field-error');
    errorEls.forEach((el) => (el.textContent = ''));
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Login Submit
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      const emailInput = document.getElementById('login-email');
      const passwordInput = document.getElementById('login-password');
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value.trim() : '';
      let hasError = false;

      if (!email) {
        setError('login-email-error', 'Please enter your email address.');
        hasError = true;
      }

      if (!password) {
        setError('login-password-error', 'Please enter your password.');
        hasError = true;
      }

      if (!hasError) {
        simulateNetworkCall(
          document.getElementById('login-submit-btn'),
          document.getElementById('login-spinner'),
          'Welcome Back!',
          `Logged in successfully as ${email}`,
          email
        );
      }
    });
  }

  // Signup Submit
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      const nameInput = document.getElementById('signup-name');
      const emailInput = document.getElementById('signup-email');
      const passwordInput = document.getElementById('signup-password');
      const termsInput = document.getElementById('terms-agree');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value.trim() : '';
      const termsAgree = termsInput ? termsInput.checked : false;
      let hasError = false;

      if (!name) {
        setError('signup-name-error', 'Please enter your full name.');
        hasError = true;
      }

      if (!email || !isValidEmail(email)) {
        setError('signup-email-error', 'Please enter a valid email address.');
        hasError = true;
      }

      if (!password || password.length < 6) {
        setError('signup-password-error', 'Password must be at least 6 characters.');
        hasError = true;
      }

      if (!termsAgree) {
        setError('terms-error', 'You must agree to the Terms to continue.');
        hasError = true;
      }

      if (!hasError) {
        simulateNetworkCall(
          document.getElementById('signup-submit-btn'),
          document.getElementById('signup-spinner'),
          'Account Created! 🎉',
          `Welcome to the realm, ${name}! Your account is ready.`,
          email
        );
      }
    });
  }

  function simulateNetworkCall(btn, spinner, titleText, messageText, userEmail) {
    if (!btn) return;
    const btnText = btn.querySelector('.btn-text');

    btn.disabled = true;
    if (btnText) btnText.classList.add('hidden');
    if (spinner) spinner.classList.remove('hidden');

    setTimeout(() => {
      btn.disabled = false;
      if (btnText) btnText.classList.remove('hidden');
      if (spinner) spinner.classList.add('hidden');

      showSuccessModal(titleText, messageText, userEmail);
    }, 1200);
  }

  // ------------------------------------------------------------------------
  // 5. Password Recovery Flow (Fake Forgot Password)
  // ------------------------------------------------------------------------
  const forgotPasswordLink = document.getElementById('forgot-password-link');
  const recoveryModal = document.getElementById('recovery-modal');
  const closeRecoveryBtn = document.getElementById('close-recovery-modal');
  
  const recoveryStep1 = document.getElementById('recovery-step-1');
  const recoveryStep2 = document.getElementById('recovery-step-2');
  const recoveryStep3 = document.getElementById('recovery-step-3');

  const recoveryFormStep1 = document.getElementById('recovery-form-step1');
  const recoveryFormStep2 = document.getElementById('recovery-form-step2');
  const finishRecoveryBtn = document.getElementById('finish-recovery-btn');
  
  const sentCodeEmail = document.getElementById('sent-code-email');
  const otpTimer = document.getElementById('otp-timer');
  const resendOtpBtn = document.getElementById('resend-otp-btn');
  const otpBoxes = document.querySelectorAll('.otp-box');

  let timerInterval = null;

  function openRecoveryModal() {
    if (recoveryModal) {
      recoveryModal.classList.remove('hidden');
      recoveryModal.setAttribute('aria-hidden', 'false');
      resetRecoverySteps();
    }
  }

  function closeRecoveryModal() {
    if (recoveryModal) {
      recoveryModal.classList.add('hidden');
      recoveryModal.setAttribute('aria-hidden', 'true');
    }
    clearInterval(timerInterval);
  }

  function resetRecoverySteps() {
    if (recoveryStep1) {
      recoveryStep1.classList.add('active');
      recoveryStep1.classList.remove('hidden');
    }
    if (recoveryStep2) {
      recoveryStep2.classList.remove('active');
      recoveryStep2.classList.add('hidden');
    }
    if (recoveryStep3) {
      recoveryStep3.classList.remove('active');
      recoveryStep3.classList.add('hidden');
    }
    clearErrors();
  }

  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
      e.preventDefault();
      openRecoveryModal();
    });
  }

  if (closeRecoveryBtn) closeRecoveryBtn.addEventListener('click', closeRecoveryModal);

  // Step 1: Send OTP Code
  if (recoveryFormStep1) {
    recoveryFormStep1.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('recovery-email');
      const email = emailInput ? emailInput.value.trim() : '';
      setError('recovery-email-error', '');

      if (!email || !isValidEmail(email)) {
        setError('recovery-email-error', 'Please enter a valid registered email.');
        return;
      }

      const btn = document.getElementById('recovery-send-btn');
      const spinner = document.getElementById('recovery-spinner-1');
      const btnText = btn ? btn.querySelector('.btn-text') : null;

      if (btn) btn.disabled = true;
      if (btnText) btnText.classList.add('hidden');
      if (spinner) spinner.classList.remove('hidden');

      setTimeout(() => {
        if (btn) btn.disabled = false;
        if (btnText) btnText.classList.remove('hidden');
        if (spinner) spinner.classList.add('hidden');

        if (sentCodeEmail) sentCodeEmail.textContent = email;
        if (recoveryStep1) {
          recoveryStep1.classList.remove('active');
          recoveryStep1.classList.add('hidden');
        }
        if (recoveryStep2) {
          recoveryStep2.classList.add('active');
          recoveryStep2.classList.remove('hidden');
        }

        startOtpTimer();
        if (otpBoxes.length > 0) otpBoxes[0].focus();
      }, 1200);
    });
  }

  // OTP Auto Jump
  otpBoxes.forEach((box, index) => {
    box.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < otpBoxes.length - 1) {
        otpBoxes[index + 1].focus();
      }
    });

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && index > 0) {
        otpBoxes[index - 1].focus();
      }
    });
  });

  function startOtpTimer() {
    let timeLeft = 59;
    if (resendOtpBtn) {
      resendOtpBtn.disabled = true;
      resendOtpBtn.classList.add('disabled');
    }

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        if (otpTimer) otpTimer.textContent = '00:00';
        if (resendOtpBtn) {
          resendOtpBtn.disabled = false;
          resendOtpBtn.classList.remove('disabled');
        }
      } else {
        const sec = timeLeft < 10 ? `0${timeLeft}` : timeLeft;
        if (otpTimer) otpTimer.textContent = `00:${sec}`;
        timeLeft--;
      }
    }, 1000);
  }

  if (resendOtpBtn) {
    resendOtpBtn.addEventListener('click', () => {
      if (!resendOtpBtn.disabled) {
        startOtpTimer();
        setError('otp-error', 'A new code has been sent to your email!');
        setTimeout(() => setError('otp-error', ''), 2500);
      }
    });
  }

  // Step 2: Verify Code
  if (recoveryFormStep2) {
    recoveryFormStep2.addEventListener('submit', (e) => {
      e.preventDefault();
      let code = '';
      otpBoxes.forEach((box) => (code += box.value));

      if (code.length < 6) {
        setError('otp-error', 'Please enter all 6 digits of your verification code.');
        return;
      }

      const btn = document.getElementById('recovery-verify-btn');
      const spinner = document.getElementById('recovery-spinner-2');
      const btnText = btn ? btn.querySelector('.btn-text') : null;

      if (btn) btn.disabled = true;
      if (btnText) btnText.classList.add('hidden');
      if (spinner) spinner.classList.remove('hidden');

      setTimeout(() => {
        if (btn) btn.disabled = false;
        if (btnText) btnText.classList.remove('hidden');
        if (spinner) spinner.classList.add('hidden');

        if (recoveryStep2) {
          recoveryStep2.classList.remove('active');
          recoveryStep2.classList.add('hidden');
        }
        if (recoveryStep3) {
          recoveryStep3.classList.add('active');
          recoveryStep3.classList.remove('hidden');
        }
      }, 1200);
    });
  }

  if (finishRecoveryBtn) {
    finishRecoveryBtn.addEventListener('click', () => {
      closeRecoveryModal();
      switchTab('login');
    });
  }

  // ------------------------------------------------------------------------
  // 6. Privacy & Terms Modals Handlers
  // ------------------------------------------------------------------------
  const privacyModal = document.getElementById('privacy-modal');
  const termsModal = document.getElementById('terms-modal');

  const openPrivacyBtn = document.getElementById('open-privacy-link');
  const openTermsBtn = document.getElementById('open-terms-link');
  const footerPrivacyBtn = document.getElementById('footer-privacy-link');
  const footerTermsBtn = document.getElementById('footer-terms-link');

  const closePrivacyBtn = document.getElementById('close-privacy-modal');
  const closeTermsBtn = document.getElementById('close-terms-modal');
  const privacyCloseBtn = document.getElementById('privacy-close-btn');
  const termsCloseBtn = document.getElementById('terms-close-btn');

  function openPrivacy() {
    if (privacyModal) {
      privacyModal.classList.remove('hidden');
      privacyModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closePrivacy() {
    if (privacyModal) {
      privacyModal.classList.add('hidden');
      privacyModal.setAttribute('aria-hidden', 'true');
    }
  }

  function openTerms() {
    if (termsModal) {
      termsModal.classList.remove('hidden');
      termsModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeTerms() {
    if (termsModal) {
      termsModal.classList.add('hidden');
      termsModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (openPrivacyBtn) openPrivacyBtn.addEventListener('click', openPrivacy);
  if (openTermsBtn) openTermsBtn.addEventListener('click', openTerms);
  if (footerPrivacyBtn) footerPrivacyBtn.addEventListener('click', openPrivacy);
  if (footerTermsBtn) footerTermsBtn.addEventListener('click', openTerms);

  if (closePrivacyBtn) closePrivacyBtn.addEventListener('click', closePrivacy);
  if (privacyCloseBtn) privacyCloseBtn.addEventListener('click', closePrivacy);

  if (closeTermsBtn) closeTermsBtn.addEventListener('click', closeTerms);
  if (termsCloseBtn) termsCloseBtn.addEventListener('click', closeTerms);

  // ------------------------------------------------------------------------
  // 7. General Modal Dismissal & Success Modal Controls
  // ------------------------------------------------------------------------
  const successModal = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function showSuccessModal(title, message, email) {
    const successTitle = document.getElementById('success-title');
    const successMessage = document.getElementById('success-message');
    const userChipEmail = document.getElementById('user-chip-email');

    if (successTitle) successTitle.textContent = title;
    if (successMessage) successMessage.textContent = message;
    if (userChipEmail) userChipEmail.textContent = email;

    if (successModal) {
      successModal.classList.remove('hidden');
      successModal.setAttribute('aria-hidden', 'false');
    }
  }

  if (modalCloseBtn && successModal) {
    modalCloseBtn.addEventListener('click', () => {
      successModal.classList.add('hidden');
      successModal.setAttribute('aria-hidden', 'true');
    });
  }

  [successModal, recoveryModal, privacyModal, termsModal].forEach((modal) => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
          modal.setAttribute('aria-hidden', 'true');
        }
      });
    }
  });
});
