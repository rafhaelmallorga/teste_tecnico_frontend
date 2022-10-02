import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }: any) => (
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
);
 
export default Loading;