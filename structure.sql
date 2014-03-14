--
-- PostgreSQL database dump
--
SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--
CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--
COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
SET search_path = public, pg_catalog;
SET default_tablespace = '';
SET default_with_oids = false;
--
-- Name: episodes; Type: TABLE; Schema: public; Owner: -; Tablespace:
--
DROP TABLE IF EXISTS episodes;
CREATE TABLE episodes (
    id integer NOT NULL,
    title character varying(255),
    description text
);
--
-- Name: episodes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--
CREATE SEQUENCE episodes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
--
-- Name: episodes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--
ALTER SEQUENCE episodes_id_seq OWNED BY episodes.id;
--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--
ALTER TABLE ONLY episodes ALTER COLUMN id SET DEFAULT nextval('episodes_id_seq'::regclass);
ALTER TABLE ONLY episodes
    ADD CONSTRAINT episodes_pkey PRIMARY KEY (id);
SET search_path TO "$user",public;

INSERT INTO episodes (title, description) VALUES
  ('Winter is Coming', 'Introduces the setting and the main characters of the show.'),
  ('The Kings Road', 'Stark and his daughters accompany the kings entourage to Kings Landing.'),
  ('Lord Snow', 'Jon Snow trains at The Wall.'),
  ('The Rains of Castamere', 'The Red Wedding...');


---
DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
    id integer NOT NULL,
    episode_id integer NOT NULL,
    description text
);
--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--
CREATE SEQUENCE comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--
ALTER SEQUENCE comments_id_seq OWNED BY comments.id;
--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--
ALTER TABLE ONLY comments ALTER COLUMN id SET DEFAULT nextval('comments_id_seq'::regclass);
ALTER TABLE ONLY comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);

INSERT INTO comments (episode_id, description) VALUES
  (1, 'I might want to watch this show'),
  (1, 'Off to a good start'),
  (2, 'Kings landing looks interesting...'),
  (2, 'Is this king ever sober ?'),
  (3, 'Jon is gonna have a bad time'),
  (4, 'I HATE YOU GEORGE MARTIN'),
  (4, 'Thats it. I AM DONE');
