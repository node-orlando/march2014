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
CREATE TABLE episodes (
    id integer NOT NULL,
    title character varying(255),
    description text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
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
