function TaskStatus() {
    return (
            <>
                {/*<div id="task-status">*/}
                {/*    <div class="progress mb-3">*/}
                {/*        <div id="task-progress" class="progress-bar" role="progressbar" style="width: 0%">0%</div>*/}
                {/*    </div>*/}
                {/*    <p id="status-message">Initializing task...</p>*/}

                {/*    <script>*/}
                {/*        document.addEventListener('DOMContentLoaded', function () {*/}
                {/*        const taskId = "{{ task_id }}";  // Passed from view*/}
                {/*        const statusElement = document.getElementById('status-message');*/}
                {/*        const progressBar = document.getElementById('task-progress');*/}

                {/*        function checkTaskStatus() {*/}
                {/*        fetch(`/celery-example-task-status/${taskId}/`)*/}
                {/*        .then(response => response.json())*/}
                {/*        .then(data => {*/}
                {/*        if (data.status === 'PROGRESS') {*/}
                {/*        const percent = Math.round((data.progress / data.total) * 100);*/}
                {/*        progressBar.style.width = `${percent}%`;*/}
                {/*        progressBar.textContent = `${percent}%`;*/}
                {/*        statusElement.textContent = `Processing... (${data.progress}/${data.total})`;*/}
                {/*        setTimeout(checkTaskStatus, 1000);*/}
                {/*    } else if (data.ready) {*/}
                {/*        progressBar.style.width = '100%';*/}
                {/*        progressBar.textContent = '100%';*/}
                {/*        statusElement.textContent = `Task completed! Result: ${data.result}`;*/}
                {/*    } else {*/}
                {/*        statusElement.textContent = `Current status: ${data.status}`;*/}
                {/*        setTimeout(checkTaskStatus, 1000);*/}
                {/*    }*/}
                {/*    });*/}
                {/*    }*/}

                {/*        // Start polling*/}
                {/*        checkTaskStatus();*/}
                {/*    });*/}
                {/*    </script>*/}
                {/*</div>*/}
            </>
    )
}