import { all } from 'redux-saga/effects';
// import authWatcher from './auth.saga';
// import lessonWatcher from './lesson.saga';
// import tutorialWatcher from './tutorial.saga';

export default function* _rootSaga() {
    yield all([
        // authWatcher(),
        // lessonWatcher(),
        // tutorialWatcher(),
    ]);
}