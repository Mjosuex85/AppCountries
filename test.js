function App() {
  const dispatch = useDispatch();
  const dates = useSelector((state) => state.dates)
  const lastDay = useSelector((state) => state.firstMonth);
  const data = useSelector((state) => state.allInfo);
  const [date, setDate] = useState(lastDay);

  console.log(lastDay)
  
  const handleChange = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };

  /* useEffect(() => {
    setDate()
  },[date]) */
  useEffect(() => {
    dispatch(getDates());
    dispatch(getAllInfo(date));
  }, []);
  
  useEffect(() => {
    dispatch(getAllInfo(date))
    dispatch(setMonthDays(date))
  },[date]) 
