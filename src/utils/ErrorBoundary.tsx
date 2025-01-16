// Error Boundary in React
// - when something breaks in our application, the entire application breaks. 
// By implementing this, we are going to catch the errors and show fallback UI 
// to the users to let the them know that something went wrong.

import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }


    static getDerivedStateFromError(): ErrorBoundaryState {
        // Update state so the next render shows the fallback UI
        return  {hasError: true};
    }

    componentDidCatch(error:Error, info:React.ErrorInfo): void {
        // You can log the error to an error reporting service here
        console.error("Error caught in Errorboundary: ", error, info);
    }

    render() {
        if(this.state.hasError) {
            // you can render any custom fallback UI
            return <h2>Something went wrong.</h2>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
