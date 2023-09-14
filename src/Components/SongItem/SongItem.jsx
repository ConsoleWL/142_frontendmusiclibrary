const SongItem = ({ song }) => {
  console.log(song);
  return (
    <tr>
      <td>{song.id}</td>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.releasedate}</td>
      <td>{song.genre}</td>
      <th>{song.like}</th>
    </tr>
  );
};

export default SongItem;
