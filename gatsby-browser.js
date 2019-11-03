import 'bootstrap/dist/css/bootstrap.css';
import './src/styles/global.css';

// Displaying a message when a service worker updates

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
  
    if (answer === true) {
      window.location.reload()
    }
}

export const registerServiceWorker = () => true