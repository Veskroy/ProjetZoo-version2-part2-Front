function truncate(value, length) {
  return value.length > length ? `${value.substring(0, length)}...` : value
}

export default truncate;
