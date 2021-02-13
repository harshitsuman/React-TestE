import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Tables from './components/Tables'
// import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsComp from './components/RefsComp'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HowerCount from './components/HowerCount'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/UserContext'

function App() {
  return (
    <div className="App">
    <UserProvider value="User context value">
      <ComponentC />
    </UserProvider>
      <HowerCount />
    <ClickCounter hero="Super-man" />
    <ErrorBoundary>
      <Hero heroname='Batman' />
    </ErrorBoundary>
    <ErrorBoundary>
      <Hero heroname='Superman' />
    </ErrorBoundary>
    <ErrorBoundary>
      <Hero heroname='Joker' />
    </ErrorBoundary>
    <FRParentInput />
    <FocusInput />
    <RefsComp />
    <ParentComp />
    <Tables />
    <FragmentDemo />
    <LifecycleA />
    <Form />
    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1>
    <Inline />
    <Stylesheet primary={true} />
    <NameList />
    <UserGreeting />
    <ParentComponent />
    <EventBind />
    <ClassClick />
      <FunctionClick />
      <Counter />
      <Message />
      <Greet name="Harshit Suman" ><p>This is the paragraph</p></Greet>
      <Greet name="Arnab"><button>Action</button></Greet>
      <Greet name="Rashmi"/>
      <Welcome name="Mukesh"/>
      <Hello />
    </div>
  );
}

export default App;
